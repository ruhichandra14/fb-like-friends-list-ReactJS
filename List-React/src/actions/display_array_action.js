import * as types from '../constants/ActionTypes';

export function displayFriend(arrayvar) {  
  console.log("******checking in action************* ",arrayvar);
  return {
    type: 'DISPLAY_ARRAY',
    payload:arrayvar
  };
}