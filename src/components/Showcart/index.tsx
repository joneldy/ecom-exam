import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { getCartItems } from '../../store/cart/selectors';
import { getTotalItems } from '../../utils';

const Showcart = () => {
  let history = useHistory();
  const products = useSelector(getCartItems);
  let items = 0;
  if (products && products.length > 0) {
    items = getTotalItems(products);
  }

  const gotoCart = () => {
    history.push('/cart');
  };

  return (
    <Button className="show-cart" onClick={gotoCart}>
      <FontAwesomeIcon icon={faShoppingCart} /> Show Cart{' '}
      <span className="badge rounded-pill bg-success">{items}</span>
    </Button>
  );
};

export default Showcart;
