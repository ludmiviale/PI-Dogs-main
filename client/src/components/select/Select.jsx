const Select = ({ name, values, selectedValues, handleChange }) => {
  return (
    <select name={name} multiple value={selectedValues} onChange={handleChange}>
      {values.map((value) => {
        return (
          <option key={value} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
