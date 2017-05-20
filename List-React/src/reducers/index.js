import { combineReducers } from 'redux';
import RespData from './reducer_friends';
import AddFriend from './reducer_added';
import DeleteFriend from './reducer_deleted';
import StarFriend from './reducers_bookmarked';
import SearchFriend from './reducer_search';
import DisplayFriend from './reducer_displayarray';


const rootReducer = combineReducers({	
	respData: RespData,
	newFriend : AddFriend,
	goneFriend : DeleteFriend,
	dearFriend : StarFriend,
	searchField : SearchFriend,
	displayFriend : DisplayFriend
});

export default rootReducer;
