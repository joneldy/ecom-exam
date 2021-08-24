import React from 'react';

interface IProps {
  id: number;
  handleRemoveCart: (id: number) => void;
}
const RemoveCartButton = ({ id, handleRemoveCart }: IProps) => {
  return (
    <div className="col-4">
      <button
        type="button"
        className="btn btn-danger btn-md cart-buttons"
        onClick={() => handleRemoveCart(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default RemoveCartButton;
