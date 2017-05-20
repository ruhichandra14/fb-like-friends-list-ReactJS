import * as types from '../constants/ActionTypes';

export function deleteFriend(name) {  
  return {
    type: 'DELETE_FRIEND',
    payload:name
  };
}