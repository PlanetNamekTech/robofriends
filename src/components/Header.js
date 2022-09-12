import React, { Component } from 'react';

class Header extends Component {
  // Doesn't update even when something is changed with shouldComponentUpdate to false
  shouldComponentUpdate(nextProps, nextState){
    return false
  }
  render() {
    return <h1 className='f1'>RoboFriends</h1>
  }
}

export default Header;