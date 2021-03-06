import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";

import { deleteContact } from "../../actions";
import Modal from "../Modal";

class ContactDelete extends React.Component {
  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <Link to="/" className="tiny ui basic button">
          Cancel
        </Link>
        <button
          onClick={() => this.props.deleteContact(id)}
          className="tiny ui basic red button"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  renderContent() {
    const fullname =
      this.props.contact.firstName + " " + this.props.contact.lastName;
    return `Are you sure to delete contact with name ${fullname} ?`;
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
      <div>
        <Modal
          header="Delete Contact"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { contact: state.contacts.data[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { deleteContact }
)(ContactDelete);
