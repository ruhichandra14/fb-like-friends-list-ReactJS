import * as types from '../constants/ActionTypes';

export function searchFriend(name) {  
	console.log("name-----------------", name)
	return {
	    type: 'SEARCH_FRIEND',
	    payload: name
	};
}