import React, { Component } from 'react';
import fire from './firebase';

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: ''
    }
  }

  componentDidMount(){
    fire.database().ref('/title').on('value', (snapshot) => {
      let title = snapshot.val();

      this.setState({title})
    });
  }

  clickHandler = (e) => {
    fire.database().ref('/title').set(e.target.value)
  }

  render() {
    return (
      <div className="App">
        <input type='text' onChange={this.clickHandler} value={this.state.title}/>
        <h1>{this.state.title}</h1>
    </div>
    );
  }
}

export default App;
