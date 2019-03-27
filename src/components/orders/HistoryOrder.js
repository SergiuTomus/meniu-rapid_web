import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cancelOrder, acceptOrder } from '../../store/actions/ordersActions';
import { faHome, faPhoneSquare, faShoppingCart, faUser, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HistoryOrder extends Component {
  onCancelClick = (id) => {
    this.props.cancelOrder(id);
  }
  onAcceptClick = (id) => {
    this.props.acceptOrder(id);
  }

  render() {
    let restaurant_user = this.props.order.restaurant_user;
    let bg_color = "bg-success";
    let handled = "Preluata"
    if (this.props.order.status == "in asteptare") {
      bg_color = "bg-warning";
    }
    if (this.props.order.status == "preluata") {
      bg_color = "bg-info";
    }
    if (this.props.order.status == "anulata") {
      bg_color = "bg-danger";
      handled = "Anulata"
    }

    const product_orders = this.props.order.Product_Orders;
    const productsList = product_orders.map(product => {
      return (<p key={product.id} className="text-left ">
        <FontAwesomeIcon icon={faCheck} className="text-danger mr-2" />
        {product.product_name} ({product.single_price} lei) <span className="text-danger ml-2"> x {product.quantity}</span>
      </p>)
    })
    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-md-4">
            <p className="text-left">
              <FontAwesomeIcon icon={faUser} className="text-info mr-2" />
              {this.props.order.user_name}
            </p>
            <p className="text-left">
              <FontAwesomeIcon icon={faPhoneSquare} className="text-info mr-2" />
              {this.props.order.user_phone}
            </p>
            <p className="text-left">
              <FontAwesomeIcon icon={faHome} className="text-info mr-2" />
              {this.props.order.delivery_address}</p>
          </div>
          <div className="col-md-4">
            {productsList}
          </div>
          <div className="col-md-4">
            <p className={`text-center text-white ${bg_color}`}>Comanda {this.props.order.status}</p>
            <p className="text-center">
              Nr. comanda: {this.props.order.id}
            </p>
            <p className="text-center">
              {restaurant_user ? `${handled} de: ${restaurant_user}` : "Nepreluata"}
            </p>
            <p className="text-center">
              <FontAwesomeIcon icon={faShoppingCart} className="text-info mr-1" />
              Total: <b>{this.props.order.total_price}</b> lei
            </p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { cancelOrder, acceptOrder })(HistoryOrder);