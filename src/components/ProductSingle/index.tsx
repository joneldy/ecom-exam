import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IProduct } from '../ProductList/types';
import Card from '../Card';
import './styles.scss';
import { addToCart, removeFromCart } from '../../store/cart/actions';

interface IProps {
  product: IProduct | null | undefined;
}

const ProductSingle = ({ product }: IProps) => {
  const dispatch = useDispatch();
  const [ProductQuantity, setProductQuantity] = useState(0);

  if (!product) return null;

  const { id, image, title, description, price, category } = product;

  const handleQuantityIncrement = (id: number) => {
    setProductQuantity(Number(ProductQuantity) + 1);
  };

  const handleQuantityDecrement = (id: number) => {
    setProductQuantity(ProductQuantity === 0 ? 0 : Number(ProductQuantity) - 1);
  };

  const handleAddToCart = (id: number, quantity: number) => {
    if (quantity) {
      dispatch(addToCart({ id, quantity }));
      setProductQuantity(0);
    }
  };

  const handleRemoveCart = (id: number) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <>
      <div className="product__single">
        <Card
          handleRemoveCart={handleRemoveCart}
          handleAddToCart={handleAddToCart}
          handleQuantityIncrement={handleQuantityIncrement}
          handleQuantityDecrement={handleQuantityDecrement}
          ProductQuantity={ProductQuantity}
          showRemoveBtn={false}
          showAddBtn={true}
          id={id}
          image={image}
          title={title}
          description={description}
          price={price}
          category={category}
        />
      </div>
    </>
  );
};

export default ProductSingle;
