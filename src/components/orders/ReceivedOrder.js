import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deliverOrder } from '../../store/actions/ordersActions';
import { faHome, faPhoneSquare, faShoppingCart, faUser, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ReceivedOrder extends Component {
  onDeliveryClick = (id) => {
    this.props.deliverOrder(id);
  }

  render() {
    const product_orders = this.props.order.Product_Orders;
    const productsList = product_orders.map(product => {
      return (<p key={product.id} className="text-left ">
        <FontAwesomeIcon icon={faCheck} className="text-danger mr-2" />
        {product.product_name} ({product.single_price} lei)<span className="text-danger ml-2"></span>
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
          <div className="col-md-5">
            {productsList}
          </div>
          <div className="col-md-3">
            <p className="text-center">
              Nr. comanda: {this.props.order.id}
            </p>
            <p className="text-center">
              <FontAwesomeIcon icon={faShoppingCart} className="text-info mr-1" />
              Total: <b>{this.props.order.total_price}</b> lei
            </p>
          </div>
          <div className="col-md-12">
            <span>
              <button onClick={() => this.onDeliveryClick(this.props.order.id)}
                type="button" className="btn btn-success mr-3 float-right">Confirma Livrarea</button>
            </span>
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

export default connect(mapStateToProps, { deliverOrder })(ReceivedOrder);