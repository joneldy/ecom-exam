import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

interface IProps {
  quantity: number;
  id: number;
  handleQuantityIncrement: (id: number) => void;
  handleQuantityDecrement: (id: number) => void;
}
const QuantityControl = ({
  quantity,
  id,
  handleQuantityIncrement,
  handleQuantityDecrement,
}: IProps) => {
  return (
    <div className="col-lg-2 quantity__control">
      <div className="input-group">
        <span className="input-group-btn">
          <button
            type="button"
            className="quantity-left-minus btn btn-danger btn-number"
            onClick={() => handleQuantityDecrement(id)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </span>
        <input
          type="text"
          className="form-control input-number quantity__field"
          value={quantity}
          readOnly
          min="1"
        />
        <span className="input-group-btn">
          <button
            type="button"
            className="quantity-right-plus btn btn-success btn-number"
            onClick={() => handleQuantityIncrement(id)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </span>
      </div>
    </div>
  );
};

export default QuantityControl;
