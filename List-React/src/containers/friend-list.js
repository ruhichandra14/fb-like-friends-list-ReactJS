import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';

import { addFriend } from '../actions/add_action';
// import { deleteFriend } from '../actions/delete_action';
// import { starFriend } from '../actions/star_action';
import { searchFriend } from '../actions/search_action';
import { displayFriend } from '../actions/display_array_action';
import ListComponent from '../components/list-comp';


class FriendList extends Component{
    render(){
      console.log("Props going are****************  ",this.props)
      return (
      <div><ListComponent {...this.props} /></div>
      )  
    }
}


function mapStateToProps(state) {
  return {
        respData : state.respData,
        arrayvar:state.arrayvar
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addFriend : addFriend, searchFriend : searchFriend , displayFriend: displayFriend}, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);