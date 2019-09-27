import _ from 'lodash';
const initialState = {
  data: {},
  msg: null,
  error: null
};

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
  	case 'GET_STARTED':
  		return {...state, error: null, msg: null};
    case 'ADD_ALL_CONTACT':
		return {
	        ...state,
	        data: {..._.mapKeys(action.payload.data, 'id')}
		};
	case 'ADD_NEW_CONTACT':
		return {
	        ...state,
	        msg: action.payload.message
		};
	case 'ADD_DETAIL_CONTACT':
		return {
			...state,
	        data: {...state.data,[action.payload.data.id]: action.payload.data},
	        msg: null,
	        error: null
		};
	case 'UPDATE_CONTACT':
		return {
			...state,
			data: {...state.data,[action.payload.data.id]: action.payload.data},
			msg: action.payload.message
		};
	case 'DELETE_CONTACT':
		return {
			...state,
			msg: action.payload.message
		};
    case 'ADD_CONTACT_FAILURE':
		return {
	        ...state,
	        error: action.payload.error
    	};
    
    default:
      return state;
  }
}
