import './main.css';
import React from 'react';
import { connect } from 'react-redux';
import { getAllContact } from '../../actions';
import { Link } from 'react-router-dom';

class ContactList extends React.Component {
	componentDidMount() {
		this.props.getAllContact();
	}

	renderContactList() {
		const res = Object.values(this.props.contact.data);
		if (res) {
			return res.map( (contact) => {
				const photo = (contact.photo !== 'N/A') ? contact.photo : 'https://semantic-ui.com/images/avatar2/large/kristy.png';
				const fullname = contact.firstName +' '+ contact.lastName;
				return (
				<div key={contact.id} className="card">
					<div className="content">
					  <img 
					  	className="right floated mini ui image" 
					  	src={photo} 
					  	alt={fullname} 
					  />
					  <div className="header">
					    {fullname}
					  </div>
					  <div className="meta">
					    {contact.age} years old
					  </div>
					</div>
					<div className="extra content">
					  <div className="ui two buttons">
					    <Link to={`/contact/edit/${contact.id}`} className="ui basic blue button">Edit</Link>
					    <Link to={`/contact/delete/${contact.id}`} className="ui basic red button">Delete</Link>
					  </div>
					</div>
				</div>
				);
			});
		}

		return (
			<div class="ui top attached button">Wait a sec . . .</div>
		);
	}

	renderStatus() {
		if (this.props.contact.error) {
			return (
				<div className="ui error message">
					{this.props.contact.error}
				</div>
			);
		}

		return (<div></div>);
	}

	render() {
		if (!this.props.contact) {
			return (
				<div className="ui active dimmer">
				    <div className="ui mini text loader">Loading</div>
				</div>
			);
		}

		return (
			<React.Fragment>
				{this.renderStatus()}
				<div className="ui segments">
					<div className="ui segment create-button">
						<Link to="/contact/new" className="tiny ui basic green button">Create New</Link>
					</div>
					<div className="ui segment contact-list">
						<div className="ui centered cards">
							{this.renderContactList()}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {contact: state.contacts};
};

export default connect(mapStateToProps,{getAllContact})(ContactList);
