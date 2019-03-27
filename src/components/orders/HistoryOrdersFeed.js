import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllOrders } from '../../store/actions/ordersActions';
import HistoryOrder from './HistoryOrder';
import Spinner from '../layout/Spinner';

class HistoryOrdersFeed extends Component {
  componentDidMount() {
    this.props.getAllOrders(this.props.auth.user.restaurant_id);
  }

  render() {
    const { orders, loading } = this.props.orders;
    if (orders === null || loading) {
      return <Spinner />;
    } else {
      return orders.map(order => <HistoryOrder key={order.id} order={order} />);
    }
  }
}

const mapStateToProps = state => ({
  orders: state.orders,
  auth: state.auth
});

export default connect(mapStateToProps, { getAllOrders })(HistoryOrdersFeed);
