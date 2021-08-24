import React from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../types';
import './styles.scss';
import { limitCharacters } from '../../../utils';

interface CardItemProps extends IProduct {}

const CardItem = ({ id, title, price, category, image }: CardItemProps) => (
  <div className="col-md-6 col-12 col-lg-3 mb-md-3 d-flex align-items-stretch">
    <div className="card text-center card__item">
      <img
        src={image}
        className="card-img-top product__image"
        alt="productImage"
      />
      <div className="card-body">
        <h3 className="card-title">{limitCharacters(title)}</h3>
        <h5 className="price">
          price: <span> ${price}</span>
        </h5>
        <h6 className="categories">
          categories: <span>{category}</span>
        </h6>

        <Link to={`/products/${id}`} className="btn btn-small btn-primary">
          View Details
        </Link>
      </div>
    </div>
  </div>
);

export default CardItem;
