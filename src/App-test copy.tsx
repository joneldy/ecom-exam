import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getProductsLoading,
  getProducts,
  getProductsError,
} from './store/products/selectors';
import { fetchproductsRequest } from './store/products/actions';

function App() {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const loading = useSelector(getProductsLoading);
  const productsError = useSelector(getProductsError);

  useEffect(() => {
    dispatch(fetchproductsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <div style={{ padding: '15px' }}>
      {productsError ? (
        <div>Error</div>
      ) : (
        products.map(({ id, title }, index) => (
          <div style={{ marginBottom: '10px' }} key={id}>
            {title}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
