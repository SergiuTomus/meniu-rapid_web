import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getReceivedOrders } from '../../store/actions/ordersActions';
import ReceivedOrder from './ReceivedOrder';
import Spinner from '../layout/Spinner';

class ReceivedOrdersFeed extends Component {
  componentDidMount() {
    this.props.getReceivedOrders(this.props.auth.user.restaurant_id);
  }

  render() {
    const { orders, loading } = this.props.orders;
    if (orders === null || loading) {
      return <Spinner />;
    } else {
      return orders.map(order => <ReceivedOrder key={order.id} order={order} />);
    }
  }
}

const mapStateToProps = state => ({
  orders: state.orders,
  auth: state.auth
});

export default connect(mapStateToProps, { getReceivedOrders })(ReceivedOrdersFeed);