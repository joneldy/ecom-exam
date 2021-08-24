import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCartItems } from '../store/cart/selectors';
import { IProductCart } from '../store/cart/types';
import Card from '../components/Card';
import OrderSummary from '../components/OrderSummary';
import { getTotalItems } from '../utils';
import {
  addQuantity,
  subtractQuantity,
  addToCart,
  removeFromCart,
} from '../store/cart/actions';

const CartPageContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector(getCartItems);
  const history = useHistory();

  const handleBack = () => {
    history.push('/');
  };

  const handleQuantityIncrement = (id: number) => {
    dispatch(addQuantity({ id }));
  };

  const handleQuantityDecrement = (id: number) => {
    dispatch(subtractQuantity({ id }));
  };

  const handleAddToCart = (id: number, quantity: number) => {
    if (quantity) {
      dispatch(addToCart({ id, quantity }));
    }
  };

  const handleRemoveCart = (id: number) => {
    dispatch(removeFromCart({ id }));
  };

  if (!products || products.length === 0)
    return (
      <div className="card text-center">
        <div className="card-header">&nbsp;</div>
        <div className="card-body">
          <h5 className="card-title">Cart items(0)</h5>
          <p className="card-text">Please add an item into the cart</p>
          <a href="/" className="btn btn-primary">
            Back to cart
          </a>
        </div>
        <div className="card-footer text-muted">&nbsp;</div>
      </div>
    );
  return (
    <div className="cart__page">
      <button
        onClick={handleBack}
        type="button"
        className="me-auto btn btn-primary back mb-4"
      >
        Back
      </button>
      <h3 className="header__title">Cart ({getTotalItems(products)} items) </h3>
      <div className="row">
        <div className="col-6">
          {products.map(
            ({
              id,
              image,
              title,
              description,
              price,
              category,
              quantity,
            }: IProductCart) => (
              <Card
                key={id}
                handleRemoveCart={handleRemoveCart}
                handleAddToCart={handleAddToCart}
                handleQuantityIncrement={handleQuantityIncrement}
                handleQuantityDecrement={handleQuantityDecrement}
                ProductQuantity={quantity}
                showRemoveBtn={true}
                showAddBtn={false}
                id={id}
                image={image}
                title={title}
                description={description}
                price={price}
                category={category}
              />
            )
          )}
        </div>
        <div className="col-6">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPageContainer;
