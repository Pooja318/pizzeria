import React, { Component } from 'react';
import './App.css';
import Pizzalist from './Pizzalist';
import Orderlist from './Orderlist';


class Pizza extends Component {

  constructor(props){
    super(props);

    this.state = {
      total: 0,
      pizzaname: [],
      count: 0
    };

    this.addPizza = this.addPizza.bind(this);
    this.activateSummary = this.activateSummary.bind(this);
  }

  addPizza(price, name){
    this.setState({total: this.state.total + price, count: this.state.count + 1});
    this.state.pizzaname.push(name);
    this.setState({pizzaname: this.state.pizzaname});
  }

  activateSummary(){
    this.props.activate(this.state.count);
  }

  render(){

    var pizzas = this.props.items.map((item, i) => {
      return <Pizzalist
        key = {i}
        name = {item.pizzaname}
        ingredients = {item.ingredients}
        price = {item.price}
        totalPrice = {this.addPizza}/>
    });

    return(
      <div>
        <div className = "inline">
          {pizzas}
        </div>
        <div className = "orderlist">
          <Orderlist total={this.state.total}
          pizzaname = {this.state.pizzaname}
          activate={this.activateSummary}/>
        </div>
      </div>
    );
  }
}

export default Pizza;
