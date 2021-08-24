import React from 'react';
import { useSelector } from 'react-redux';
import { getCartItems } from '../../store/cart/selectors';
import { getSubTotal } from '../../utils';
import './styles.scss';

const OrderSummary = () => {
  const products = useSelector(getCartItems);
  const ShippingFee = 100;
  const subTotal = getSubTotal(products);
  return (
    <div className="order__summary">
      <h4 className="text-muted text-center mb-4">Order Summary</h4>
      <ul className="summary__detail">
        <li className="d-flex justify-space-around">
          <div className="me-auto item">Subtotal (0 items)</div>
          <div className="ms-auto item">${subTotal}</div>
        </li>
        <li className="d-flex justify-space-around">
          <div className="me-auto item">Shipping Fee</div>
          <div className="ms-auto item">${ShippingFee}</div>
        </li>
      </ul>
      <hr />
      <div className="d-flex justify-space-around">
        <div className="me-auto item">Total</div>
        <div className="ms-auto item">${subTotal + ShippingFee}</div>
      </div>
      <div className="mt-5">
        <button type="button" className="btn btn-md btn-primary">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
