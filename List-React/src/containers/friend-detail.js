import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import DetailComponent from '../components/detail-comp'
import { displayFriend } from '../actions/display_array_action';
import { deleteFriend } from '../actions/delete_action';

class FriendDetail extends Component{
    render(){
      
      return (
      <div><DetailComponent {...this.props} /></div>
      )  
    }
}

function mapStateToProps(state) {
	return {
        addedfriend : state.newFriend,
        deletedfriend : state.goneFriend,
        markedfriend : state.dearFriend,
        friends : state.friends,
        arrayvar:state.arrayvar      
	}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({displayFriend : displayFriend, deleteFriend : deleteFriend}, dispatch )
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendDetail);