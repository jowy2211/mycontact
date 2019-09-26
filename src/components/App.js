import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import ContactList from './contacts/ContactList';
import ContactCreate from './contacts/ContactCreate';
import ContactEdit from './contacts/ContactEdit';
import ContactDelete from './contacts/ContactDelete';

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<Header />
				<Route exact path="/" component={ContactList} />
				<Route exact path="/contact/new" component={ContactCreate} />
				<Route exact path="/contact/edit/:id" component={ContactEdit} />
				<Route exact path="/contact/delete/:id" component={ContactDelete} />
			</div>
		);
	}
};

export default App;
