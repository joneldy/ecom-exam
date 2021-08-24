import React from 'react';
import { IProduct } from '../ProductList/types';
import QuantityControl from '../QuantityControl';
import AddToCartButton from '../AddToCartButton';
import RemoveCartButton from '../RemoveCartButton';

interface IProps extends IProduct {
  id: number;
  showAddBtn: boolean;
  showRemoveBtn: boolean;
  ProductQuantity: number;
  handleQuantityIncrement: (id: number) => void;
  handleQuantityDecrement: (id: number) => void;
  handleAddToCart: (id: number, quantity: number) => void;
  handleRemoveCart: (id: number) => void;
}

const Card = ({
  id,
  image,
  title,
  description,
  price,
  category,
  ProductQuantity,
  handleQuantityIncrement,
  handleQuantityDecrement,
  handleAddToCart,
  handleRemoveCart,
  showAddBtn,
  showRemoveBtn,
}: IProps) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <div className="productImage">
            <img
              src={image}
              className="img-fluid rounded-start"
              alt="product"
            />
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              <small>
                cagtegory: <span className="bold">{category}</span>
              </small>
            </p>
            <p className="card-text">
              <small>
                price: <span className="bold">${price}</span>
              </small>
            </p>

            <div className="mt-4 d-flex align-items-end">
              <QuantityControl
                id={id}
                quantity={ProductQuantity}
                handleQuantityIncrement={handleQuantityIncrement}
                handleQuantityDecrement={handleQuantityDecrement}
              />
              {showAddBtn && (
                <AddToCartButton
                  quantity={ProductQuantity}
                  id={id}
                  handleAddToCart={handleAddToCart}
                />
              )}
              {showRemoveBtn && (
                <RemoveCartButton id={id} handleRemoveCart={handleRemoveCart} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
