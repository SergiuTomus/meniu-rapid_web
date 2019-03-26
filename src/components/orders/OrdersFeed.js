import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewOrders } from '../../store/actions/ordersActions';
import NewOrder from './NewOrder';


class OrdersFeed extends Component {
  componentDidMount() {
    this.props.getNewOrders();
  }

  render() {
    const { orders, loading } = this.props.orders;
    // let ordersContent;

    // if (orders === null || loading) {
    //   ordersContent = <Spinner />;
    // } else {
    //   ordersContent = <OrdersFeed orders={orders} />;
    // }

    console.log('what is', orders);
    return orders.map(order => <NewOrder key={order.id} order={order} />);
  }
}

const mapStateToProps = state => ({
  orders: state.orders
});

export default connect(mapStateToProps, { getNewOrders })(OrdersFeed);