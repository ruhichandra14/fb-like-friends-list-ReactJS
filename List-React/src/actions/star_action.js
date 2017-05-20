import * as types from '../constants/ActionTypes';

export function starFriend(name) {  
  return {
    type: 'STAR_FRIEND',
    payload:name
  };
}