const Select = ({
  name,
  multiple,
  values,
  selectedValues,
  handleChange,
  keySelector,
}) => {
  return (
    <select
      name={name}
      multiple={multiple}
      value={selectedValues}
      onChange={handleChange}
    >
      {values.map((value) => {
        return (
          <option key={keySelector(value)} value={value.name}>
            {value.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
