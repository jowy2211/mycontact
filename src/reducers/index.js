import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import mainReducers from './mainReducers';

export default combineReducers({
	form: formReducer,
	contacts: mainReducers
});