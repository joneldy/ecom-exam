import React from 'react';

interface IProps {
  selected: string | null;
  onChange: (e: string) => void;
}

const SelectCategory = ({ selected, onChange }: IProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };
  return (
    <div>
      <label className="form-label">Sort direction</label>
      <select
        className="form-select"
        value={selected || 'asc'}
        onChange={handleChange}
      >
        <option value="asc">asc </option>
        <option value="desc">desc</option>
      </select>
    </div>
  );
};

export default SelectCategory;
