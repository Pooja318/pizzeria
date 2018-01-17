import React, { Component } from 'react';
import './App.css';
import Pizza from './Pizza';
import Ordersummary from './Ordersummary';
import firebase from './firebase';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      active: false,
      len: 0,
      pizzas: []
    };

    this.toggleActive = this.toggleActive.bind(this);
  }

  componentWillMount(){
    firebase.database().ref('/pizzas').once('value').then((snapshot) => {
      var pizzas = snapshot.val();
      this.setState({pizzas: pizzas});
    });
  }

  toggleActive(count){
    this.setState({active: true, len: count});
  }

  render() {
    var shown = {display: this.state.active ? "block" : "none"};
    var hidden = {display: this.state.active ? "none" : "block"};

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pizzeria</h1>
        </header>

        <div style={hidden}>
          <p className='App-intro'>Order your favourite Pizzzzza here!!!</p>
          <Pizza items={this.state.pizzas} activate={this.toggleActive}/>
        </div>
        <div style={shown}>
          <Ordersummary length={this.state.len}/>
        </div>
      </div>
    );
  }
}

export default App;
