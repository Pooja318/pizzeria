import React, { Component } from 'react';
import './App.css';

class Pizzalist extends Component {

  constructor(props){
    super(props);

    this.state = {};

    this.clicked = this.clicked.bind(this);
  }

  clicked(){
    this.props.totalPrice(this.props.price, this.props.name);
  }

  render(){
    return(
      <div>
        <h3 className='pizza-name'>{this.props.name}</h3>
        <p className='pizza-ing'><strong>Ingredients: </strong> {this.props.ingredients}</p>
        <p className='pizza-price'><strong>Price: </strong> {this.props.price}</p>
        <p className='add'><button onClick={this.clicked}>Add</button></p>
      </div>
    );
  }
}

export default Pizzalist;
