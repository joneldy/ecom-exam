import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterContext } from '../context/FilterContext';
import Showcart from '../components/Showcart';
import Search from '../components/Search';
import HeaderFilters from '../components/HeaderFilters';
import ProductList from '../components/ProductList';
import { fetchproductsRequest } from '../store/products/actions';
import { fetchCategoriesRequest } from '../store/categories/actions';

import Pagination from '../components/Pagination';
import {
  getProductsLoading,
  getProducts,
  getProductsError,
} from '../store/products/selectors';
import { IProduct } from '../components/ProductList/types';

const HomeContainer = () => {
  const dispatch = useDispatch();
  // products initialization
  const products = useSelector(getProducts);
  const loadingProducts = useSelector(getProductsLoading);
  const productsError = useSelector(getProductsError);
  // filters
  const [searchStr, setSearchStr] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState('');
  const [category, setCategory] = useState<string | null>('');
  // pagination
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
    dispatch(fetchproductsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // filter functions
  const handleSearchChange = (search: string) => {
    setSearchStr(search);
    setPage(0);
  };
  const onChangeCategory = (category: string) => {
    setCategory(category);
    setPage(0);
  };

  const onChangeSortBy = (sort: string) => {
    setSortBy(sort);
    setPage(0);
  };

  const onChangeDirection = (direction: string) => {
    setSortDirection(direction);
    setPage(0);
  };

  // filter context
  const FilterProps = {
    searchStr,
    sortBy,
    sortDirection,
    category,
    onChangeCategory,
    onChangeSortBy,
    onChangeDirection,
    handleSearchChange,
  };

  const filterByCategories = (products: IProduct[]) => {
    return products.filter((item) => item.category === category);
  };

  const filterProductName = (products: IProduct[]) => {
    return products.filter((item) => {
      const title = item.title.toLowerCase();
      return title.indexOf(searchStr) !== -1;
    });
  };

  const sortProducts = (products: IProduct[], _sortBy: string) => {
    let _products = [...products];

    if (_sortBy === 'name') {
      const sortByName = (a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      };
      _products = products.sort(sortByName);
    } else if (_sortBy === 'price') {
      const sorPrice = (a, b) => {
        return +a.price - +b.price;
      };
      _products = products.sort(sorPrice);
    }

    return sortDirection === 'desc' ? _products.reverse() : _products;
  };

  const filterResults = (products: IProduct[]) => {
    if (!products)
      return {
        results: [],
        total: 0,
      };

    let results = products;

    if (category) {
      results = filterByCategories(results);
    }

    if (searchStr && searchStr.trim() !== '' && searchStr.length > 0) {
      results = filterProductName(results);
    }

    if (sortBy) {
      results = sortProducts(results, sortBy);
    }

    return {
      results,
      total: results.length,
    };
  };

  // handle pagination flow
  const limit = 5;
  let { results, total } = filterResults(products);
  const pageCount = total ? Math.ceil(total / limit) : 0;
  results = total ? results.slice(page * limit, page * limit + 5) : [];

  const onPageChange = ({ selected }: { selected: number }) => {
    setPage(Number(selected));
  };

  return (
    <FilterContext.Provider value={FilterProps}>
      <div className="home">
        <div className="header">
          <div className="d-flex header__container">
            <Search searchStr={searchStr} onChange={handleSearchChange} />
            <Showcart />
          </div>
          <HeaderFilters />
        </div>
        {pageCount > 0 && (
          <Pagination
            forcePage={page}
            onPageChange={onPageChange}
            pageCount={pageCount}
            pageRangeDisplayed={limit}
          />
        )}
        <ProductList
          products={results}
          error={productsError}
          loading={loadingProducts}
        />
        {pageCount > 0 && (
          <Pagination
            forcePage={page}
            onPageChange={onPageChange}
            pageCount={pageCount}
            pageRangeDisplayed={limit}
          />
        )}
      </div>
    </FilterContext.Provider>
  );
};

export default HomeContainer;
