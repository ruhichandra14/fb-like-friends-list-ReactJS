export default function(state = null , action){
    switch (action.type) {
    	case 'ADD_FRIEND':
    	return action.payload;
		
    }

	return state;
}