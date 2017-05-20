import React, { Component } from 'react';
import FriendList from '../containers/friend-list';
import FriendDetail from '../containers/friend-detail';
import style from '../../style/style.css';

export default class App extends Component {
  render() {
    return (
      <div>
          <FriendList/>
          <FriendDetail/>
      </div>
    );
  }
}
