import React from 'react';
import { FilterContext, FilterInterface } from '../../context/FilterContext';
import SelectCategory from '../SelectCategory';
import SelectSoryBy from '../SelectSoryBy';
import SelectSortStatus from '../SelectSortStatus';

const HeaderFilters = () => {
  const Context = React.useContext<FilterInterface | null>(FilterContext);
  return (
    <ul className="header__filters">
      <li>
        <SelectCategory
          onChange={Context?.onChangeCategory!}
          selected={Context?.category!}
        />
      </li>
      <li>
        <SelectSoryBy
          selected={Context?.sortBy!}
          onChange={Context?.onChangeSortBy!}
        />
      </li>
      <li>
        <SelectSortStatus
          selected={Context?.sortDirection!}
          onChange={Context?.onChangeDirection!}
        />
      </li>
    </ul>
  );
};

export default HeaderFilters;
