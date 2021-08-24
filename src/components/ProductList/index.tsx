import React from 'react';
import { IProduct } from './types';
import DisplayOption from '../DisplayOption';
import ListItem from './ListItem';
import CardItem from './CardItem';

interface IProps {
  products: IProduct[];
  error: string | null;
  loading: boolean;
}

const ProductList = ({ products, error, loading }: IProps) => {
  const [display, setDisplay] = React.useState('grid');
  const changeDisplay = (layout: string) => {
    setDisplay(layout);
  };

  if (loading) return <div>Loading...</div>;

  if (error)
    return (
      <div className="alert alert-danger" role="alert">
        Unable to fetch the products at this time.
      </div>
    );

  const renderList = ({ id, title, image, category, price }) =>
    display === 'grid' ? (
      <CardItem
        key={id}
        id={id}
        title={title}
        image={image}
        category={category}
        price={price}
      />
    ) : (
      <ListItem
        key={id}
        id={id}
        title={title}
        image={image}
        category={category}
        price={price}
      />
    );

  return (
    <>
      <div className="mt-5">
        <DisplayOption changeDisplay={changeDisplay} display={display} />
      </div>
      <div className="mt-5 row ">
        {products.map((items) => renderList({ ...items }))}
      </div>
    </>
  );
};

export default ProductList;
