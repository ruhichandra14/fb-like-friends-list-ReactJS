export default function(state = null , action){
    switch (action.type) {
    	case 'DELETE_FRIEND':
    	return action.payload;
  
    }

	return state;
}