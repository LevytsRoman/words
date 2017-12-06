import React, { Component } from 'react';
import { auth, database } from './firebase';

class CurrentUser extends Component {
  handleSignOut = () => {
    auth.signOut().then( res => {
      database.ref(`users/${this.props.currentUser.uid}/online`).set(false);
    });
  }

  render() {
    return (
      <div>
        <div>{this.props.currentUser.displayName}</div>
        <button onClick={this.handleSignOut}>logout</button>
      </div>
    );
  }
}

export default CurrentUser;
