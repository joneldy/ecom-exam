import React from 'react';

export interface FilterInterface {
  searchStr: string | null;
  sortBy: string | null;
  sortDirection: string | null;
  category: string | null;
  onChangeCategory: (e: string) => void;
  onChangeSortBy: (e: string) => void;
  onChangeDirection: (e: string) => void;
  handleSearchChange: (e: string) => void;
}

export const FilterContext = React.createContext<FilterInterface | null>(null);
