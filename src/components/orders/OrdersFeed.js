import React, { Component } from 'react';
import OrderItem from './OrderItem';

class OrdersFeed extends Component {
  render() {
    const new_orders = this.props.orders;
    console.log('what is', new_orders);
    return new_orders.map(order => <OrderItem key={order.id} order={order} />);
  }
}

export default OrdersFeed;