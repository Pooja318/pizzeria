import React, { Component } from 'react';
import firebase from './firebase';
var uuid = require('uuid');

class Orderlist extends Component {
  constructor(props){
    super(props);

    this.state = {
      uid: uuid.v1()
    };

    this.placeorder = this.placeorder.bind(this);
  }

  placeorder(){
    this.props.activate();

    firebase.database().ref('order/' + this.state.uid).set({
      pizzas: this.props.pizzaname,
      total: this.props.total
    });
  }

  render(){

    var orders = this.props.pizzaname.map((item, i) => {
      return <li key={i}>{item}</li>
    });

    return(
      <div className='order-list'>
        <div>
          <p className='fancy'>Order List</p>
          <ul className='orders'>{orders}</ul>
        </div>
        <br/>
        <p className='fancy'>Total Amount</p>
        <strong>{this.props.total}</strong>
        <br/><br/>
        <button onClick={this.placeorder}>Place Order</button>
      </div>
    );
  }
}

export default Orderlist;
