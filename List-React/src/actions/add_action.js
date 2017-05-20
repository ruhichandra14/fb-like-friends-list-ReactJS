import * as types from '../constants/ActionTypes';

export function addFriend(name) {  
  	return {
    	type: 'ADD_FRIEND',
    	payload:name
  	};
}



