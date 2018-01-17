import React, { Component } from 'react';

class Ordersummary extends Component {

  render(){
    var time = this.props.length * 20;
    return(
      <div>
        Your order will be delivered in <strong>{time} minutes</strong>.
      </div>
    );
  }
}

export default Ordersummary;
