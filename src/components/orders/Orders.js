import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewOrders } from '../../store/actions/ordersActions';
import NewOrdersFeed from './NewOrdersFeed';
import ReceivedOrdersFeed from './ReceivedOrdersFeed';
import HistoryOrdersFeed from './HistoryOrdersFeed';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../../style/Orders.css';

class Orders extends Component {

  render() {
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
              <Route exact path="/comenzi/comenzi-noi" component={NewOrdersFeed} />
              <Route exact path="/comenzi/comenzi-preluate" component={ReceivedOrdersFeed} />
              <Route exact path="/comenzi/istoric-comenzi" component={HistoryOrdersFeed} />
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
