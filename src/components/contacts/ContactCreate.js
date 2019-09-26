import React from 'react';
import { connect } from 'react-redux';

import { createContact } from '../../actions';
import ContactForm from './ContactForm';

class ContactCreate extends React.Component {
	onSubmit = (formValues) => {
		this.props.createContact(formValues);
	}

	render() {
		return (
			<div className="ui segments">
				<div className="ui segment">
					<h4 className="ui dividing header">Create New Contact</h4>
				</div>
				<ContactForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, {createContact})(ContactCreate);
