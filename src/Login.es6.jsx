import React, { Component } from 'react';
import { auth, googleAuthProvider, database } from './firebase';

class Login extends Component {

  handleLogIn = () => {
    auth.signInWithPopup(googleAuthProvider).then( res => {
      // debugger
      // console.log(res)
      let {displayName, email, photoURL, uid} = res.user;
      // let userId = currentUser.uid; 
      // currentUser.online = true
      console.log(displayName);
      let newUser = {
        displayName: displayName, 
        email: email,
        photoURL: photoURL,
        online: true
      }

      // console.log(currentUser);

      database.ref(`users/${uid}`).set(newUser);
    })
  }

  render() {
    return (
      <button onClick={this.handleLogIn}>login</button>
    );
  }
}

export default Login;
