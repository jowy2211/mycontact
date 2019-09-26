import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

const required = (value) => value ? undefined : 'The field is required';
const number = (value) => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = (min) => (value) => value && value < min ? `Invalid age, at least greater than ${min}` : undefined;
const maxLength = (max) => (value) => value && value > max ? `Invalid age, at least greater than ${max}` : undefined;
const minValue1 = minValue(1);
const maxLength15 = maxLength(120);

class ContactForm extends React.Component {
	renderError({ error, touched, warning }) {
		return (
			<div className="ui error message">
				{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
			</div>
		);
	}

	renderInput = ({input, type, label, placeholder, meta}) => {
		const filedInput = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={filedInput}>
				<label>{label}</label>
				<input type={type} {...input} autoComplete="off" placeholder={placeholder} />
				{this.renderError(meta)}
			</div>
		);
	}

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	}

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
					<div className="two fields">
						<Field 
							type="text" 
							name="firstName" 
							component={this.renderInput} 
							label="First Name" 
							placeholder="Input first name here"
							validate={[ required ]}
						/>
						<Field 
							type="text" 
							name="lastName" 
							component={this.renderInput} 
							label="Last Name" 
							placeholder="Input last name here" 
							validate={[ required ]}
						/>
					</div>
					<div className="fields">
						<div className="four wide field">
							<Field 
								type="number" 
								name="age" 
								component={this.renderInput} 
								label="Age" placeholder="Input age here" 
								validate={[ required, number, minValue1, maxLength15 ]}
							/>
						</div>
						<div className="twelve wide field">
							<Field 
								type="text" 
								name="photo" 
								component={this.renderInput} 
								label="Avatar Link" 
								placeholder="Input avatar link here" 
								validate={[ required ]}
							/>
						</div>
					</div>
					<div className="ui segment">
						<Link to="/" className="tiny ui basic button">Back</Link>
						<button className="tiny ui basic button primary">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default reduxForm({form: 'ContactForm'})(ContactForm);

