import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getNewOrders } from '../../store/actions/ordersActions';
import OrdersFeed from './OrdersFeed';
import Profile from '../profile/Profile';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Orders.css';

class Orders extends Component {
  componentDidMount() {
    this.props.getNewOrders();
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
                  <NavLink className="nav-item nav-link text-secondary" activeClassName="active" to="/comenzi/comenzi-noi">
                    Comenzi noi
                  </NavLink>
                  <NavLink className="nav-item nav-link text-secondary" activeClassName="active" to="/comenzi/comenzi-preluate">
                    Comenzi preluate
                  </NavLink>
                  <NavLink className="nav-item nav-link text-secondary" activeClassName="active" to="/comenzi/istoric-comenzi">
                    Istoric comenzi
                  </NavLink>
                </div>
              </nav>
            </div>
            <div className="col-md-12">
              <Route exact path="/comenzi/comenzi-noi" render={(props) => (<div>{ordersContent}</div>)} />
              <Route exact path="/comenzi/comenzi-preluate" component={Spinner} />
              <Route exact path="/comenzi/istoric-comenzi" component={Spinner} />
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
