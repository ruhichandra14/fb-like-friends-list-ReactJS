export default function(state = null , action){
    switch (action.type) {
    	case 'STAR_FRIEND':
    	return action.payload;
  
    }

	return state;
}