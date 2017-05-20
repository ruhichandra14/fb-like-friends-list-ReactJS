export default function(state = null , action){
    switch (action.type) {
    	case 'SEARCH_FRIEND':
    	return action.payload;
  
    }

	return state;
}