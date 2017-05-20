export default function(state = {arrayvar:[]}, action){
    switch (action.type) {
    	case 'DISPLAY_ARRAY':
    	console.log('reducer',action.payload)
    	console.log('prevState',state)
		Object.assign({},state,{arrayvar:state.arrayvar.push(action.payload)});
		console.log('state',state.arrayvar[0][0])
  		  }

	return state;
}