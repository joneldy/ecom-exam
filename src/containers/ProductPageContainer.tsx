import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductSingle from '../components/ProductSingle';
import { fetchproductsRequest } from '../store/products/actions';
import { getProductsLoading, getProducts } from '../store/products/selectors';
import { IProduct } from '../components/ProductList/types';
import Showcart from '../components/Showcart';

const ProductPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  // products initialization
  const products = useSelector(getProducts);
  const loadingProducts = useSelector(getProductsLoading);
  const [product, setProduct] = useState<IProduct | null>();

  const handleBack = () => {
    history.push('/');
  };

  useEffect(() => {
    dispatch(fetchproductsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const result = products.find((item) => item.id === Number(id));

    if (result) {
      setProduct(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  if (loadingProducts) return <p>loading...</p>;

  return (
    <div className="product__page">
      <div className="d-flex justify justify-content-end mb-3">
        <button
          onClick={handleBack}
          type="button"
          className="me-auto btn btn-primary back"
        >
          Back
        </button>
        <Showcart />
      </div>
      <ProductSingle product={product!} />
    </div>
  );
};

export default ProductPageContainer;
