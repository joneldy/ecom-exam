import React from 'react';

interface IProps {
  id: number;
  quantity: number;
  handleAddToCart: (id: number, quantity: number) => void;
}

const AddToCartButton = ({ id, quantity, handleAddToCart }: IProps) => {
  return (
    <div className="col-4">
      <button
        type="button"
        className="btn btn-primary btn-md cart-buttons"
        onClick={() => handleAddToCart(id, quantity)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
