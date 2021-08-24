import React from 'react';
import { useSelector } from 'react-redux';
import {
  getCategoriesLoading,
  getCategories,
  getCategoriesError,
} from '../../store/categories/selectors';
import './styles.scss';

interface IProps {
  selected: string | null;
  onChange: (e: string) => void;
}

const SelectCategory = ({ selected, onChange }: IProps) => {
  const categories = useSelector(getCategories);
  const loading = useSelector(getCategoriesLoading) || false;
  const error = useSelector(getCategoriesError);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (error) return <p>Unable to get get categories </p>;

  return (
    <div>
      <label className="form-label">Filter by category</label>
      <select
        className="form-select"
        onChange={handleChange}
        disabled={loading}
        value={selected || ''}
      >
        <option value="">Choose Category</option>
        {categories.map((item, index) => (
          <option key={index} value={item}>
            {capitalizeFirstLetter(item)}{' '}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategory;
