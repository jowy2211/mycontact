import _ from "lodash";
import React from "react";
import { connect } from "react-redux";

import { editContact } from "../../actions";
import ContactForm from "./ContactForm";

class ContactEdit extends React.Component {
  onSubmit = formValues => {
    this.props.editContact(this.props.match.params.id, formValues);
  };

  render() {
    console.log(this.props.contact);
    if (!this.props.contact) {
      return (
        <div className="ui active dimmer">
          <div className="ui mini text loader">Loading</div>
        </div>
      );
    }

    return (
      <div className="ui segments">
        <div className="ui segment">
          <h4 className="ui dividing header">Edit Contact</h4>
        </div>
        <ContactForm
          initialValues={_.pick(
            this.props.contact,
            "firstName",
            "lastName",
            "age",
            "photo"
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state.contacts) {
    return { contact: state.contacts.data[ownProps.match.params.id] };
  }
};

export default connect(
  mapStateToProps,
  { editContact }
)(ContactEdit);
