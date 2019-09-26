const initialState = {
  data: {},
  error: null
};

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
  	case 'GET_STARTED':
  		return {
  			...state
  		};
    case 'ADD_ALL_CONTACT':
		return {
	        ...state,
	        error: null,
	        data: {...state.data, list: action.payload.data}
		};
	case 'ADD_NEW_CONTACT':
		return {
	        ...state,
	        error: null
		};
	case 'ADD_DETAIL_CONTACT':
		return {
			...state,
	        error: null,
	        data: {...state.data, [action.payload.data.id]: action.payload.data}
		};
	case 'UPDATE_CONTACT':
		return {
			...state,
	        error: null,
	        data: {...state.data, list: action.payload}
		};
	case 'DELETE_CONTACT':
		return {
			...state,
	        error: null
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

// export default (state = [], action) => {
// 	switch(action.type) {
// 		case 'GET_ALL_CONTACTS':
// 			return action.payload;
// 		case 'GET_CONTACT_BY_ID':
// 			return { ...state.contact, [action.payload.data.id]: action.payload };
// 		case 'CREATE_CONTACT':
// 			return { ...state.contact, [action.payload.id]: action.payload };
// 		case 'EDIT_CONTACT':
// 			return { ...state.contact, [action.payload.id]: action.payload };
// 		case 'DELETE_CONTACT':
// 			return _.omit(state, action.payload);
// 		default:
// 			return state;
// 	}
// }