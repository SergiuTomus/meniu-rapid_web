import React, { Component } from 'react';

export default class OrderItem extends Component {
  render() {
    const product_orders = this.props.order.Product_Orders;
    console.log(product_orders);
    const productsList = product_orders.map(product => {
      return (<p key={product.id} className="text-left ">
        <i className="fas fa-check text-danger mr-2" />
        {product.product_name} <span className="text-danger ml-2"> x {product.quantity}</span>
      </p>)
    })
    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-md-4">
            <p className="text-left">
              <i className="fas fa-user text-info mr-2" />
              {this.props.order.user_name}
            </p>
            <p className="text-left">
              <i className="fas fa-phone-square text-info mr-2" />
              {this.props.order.user_phone}
            </p>
            <p className="text-left">
              <i className="fas fa-home text-info mr-2" />
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
              <i className="fas fa-shopping-cart text-info mr-1" />
              Total: <b>{this.props.order.total_price}</b> lei
            </p>
          </div>
          <div className="col-md-12">
            <span>
              <button type="button" className="btn btn-info mr-3 float-right">Accepta</button>
              <button type="button" className="btn btn-danger mr-3 float-right">Anuleaza</button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
