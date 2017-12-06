import React, { Component } from 'react';
import fire, {auth, database} from './firebase';
import Login from './Login.es6'
import CurrentUser from './CurrentUser.es6'
import map from 'lodash/map'

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: null,
      usersOnline: []
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged((currentUser)=> {
      // console.log(currentUser)
      this.setState({ currentUser })
    });

    // database.ref('.info/connected').on('value', function(snapshot){
    //   debugger
    //   console.log(snapshot.val())
    // })

    database.ref('/users').on('value', (snapshot) => {
      // let map = require('lodash/map')
      let usersOnline = map(snapshot.val(), (v,k) => {
        v.uid = k
        return v.online ? v : null
      }).filter( u => !(u === null))
      // debugger
      this.setState({ usersOnline })
    });
      //   let users = snapshot.val();
    //   let usersOnline = map(users, (value,key) => {
    //     if(value.online) {
    //       return {key: value}
    //     }
    //     });
    // });
  }

  render() {
    const {usersOnline, currentUser} = this.state
    return (
      <div className="App">
        {currentUser ? <CurrentUser currentUser={currentUser}/> : <Login/>}
        {usersOnline.map( user => <p key={user.uid}>{user.email}</p> )}
      </div>
    );
  }
}

export default App;
