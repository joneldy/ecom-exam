import React from 'react';
import './styles.scss';

interface IProps {
  searchStr: string | null;
  onChange: (e: string) => void;
}

const Search = ({ searchStr, onChange }: IProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="search__container">
      <input
        type="text"
        className="form-control search__container__input"
        name="search"
        placeholder="search product"
        value={searchStr || ''}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
