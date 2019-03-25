import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getNewOrders } from '../../store/actions/ordersActions';
import OrdersFeed from './OrdersFeed';
import './Orders.css';

class Orders extends Component {
  componentDidMount() {
    this.props.getNewOrders();
  }

  selectneworders() {

  }

  render() {
    const { orders, loading } = this.props.orders;
    let ordersContent;

    if (orders === null || loading) {
      ordersContent = <Spinner />;
    } else {
      ordersContent = <OrdersFeed orders={orders} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav>
                <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                  <a className="nav-item nav-link active text-secondary" data-toggle="tab" href="#" aria-selected="true">Comenzi noi</a>
                  <a className="nav-item nav-link text-secondary" data-toggle="tab" href="#" aria-selected="false">Comenzi preluate</a>
                  <a className="nav-item nav-link text-secondary" data-toggle="tab" href="#" aria-selected="false">Istoric comenzi</a>
                </div>
              </nav>
            </div>
            <div className="col-md-12">
              {ordersContent}
              <br /><br /><br />
            </div>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  orders: state.orders
});

export default connect(mapStateToProps, { getNewOrders })(Orders);
