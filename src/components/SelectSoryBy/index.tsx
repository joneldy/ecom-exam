import React from 'react';

interface IProps {
  selected: string | null;
  onChange: (str: string) => void;
}

const SelectCategory = ({ selected, onChange }: IProps) => {
  const handleChange = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <div>
      <label className="form-label">Sort by</label>
      <select
        className="form-select"
        value={selected || 'name'}
        onChange={handleChange}
      >
        <option value="name">name </option>
        <option value="price">price</option>
      </select>
    </div>
  );
};

export default SelectCategory;
