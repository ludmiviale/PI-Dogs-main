const Select = ({ name, values, selectedValues, handleChange }) => {
  return (
    <select name={name} multiple value={selectedValues} onChange={handleChange}>
      {values.map((value) => {
        return (
          <option key={value.id} value={value.name}>
            {value.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
