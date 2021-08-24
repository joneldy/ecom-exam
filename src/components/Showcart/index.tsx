import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Showcart = () => (
  <Button className="show-cart">
    <FontAwesomeIcon icon={faShoppingCart} /> Show Cart{' '}
    <span className="badge rounded-pill bg-success">4</span>
  </Button>
);

export default Showcart;
