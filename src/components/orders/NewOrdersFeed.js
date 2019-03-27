import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewOrders } from '../../store/actions/ordersActions';
import NewOrder from './NewOrder';
import Spinner from '../layout/Spinner';


class NewOrdersFeed extends Component {
  componentDidMount() {
    this.props.getNewOrders(this.props.auth.user.restaurant_id);
  }

  render() {
    const { orders, loading } = this.props.orders;

    if (orders === null || loading) {
      return <Spinner />;
    } else {
      return orders.map(order => <NewOrder key={order.id} order={order} />);
    }
  }
}

const mapStateToProps = state => ({
  orders: state.orders,
  auth: state.auth
});

export default connect(mapStateToProps, { getNewOrders })(NewOrdersFeed);