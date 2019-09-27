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
	        data: action.payload.data,
		};
	case 'ADD_NEW_CONTACT':
		return {
	        ...state,
	        [action.payload.message]: action.payload,
	        error: null
		};
	case 'ADD_DETAIL_CONTACT':
		return {
			...state,
	        [action.payload.data.id]: action.payload.data,
	        error: null
		};
	case 'UPDATE_CONTACT':
		return {
			...state,
	        [action.payload.data.id]: action.payload.data,
	        error: null
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
