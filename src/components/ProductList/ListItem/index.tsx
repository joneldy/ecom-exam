import React from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../types';
import './styles.scss';

interface ListItemProps extends IProduct {}

const ListItem = ({
  id,
  title,
  price,
  description,
  category,
  image,
}: ListItemProps) => (
  <div className="col-12 list__item">
    <div className="card">
      <div className="card-body d-flex align-items-center">
        <img
          src={image}
          alt="productImage"
          className="img-thumbnail product__image"
        />
        <div>
          <h5 className="card-title">{title}</h5>
          <h6>price: ${price}</h6>
          <h6 className="category">category: {category}</h6>
          <Link to={`/products/${id}`} className="btn btn-small btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default ListItem;
