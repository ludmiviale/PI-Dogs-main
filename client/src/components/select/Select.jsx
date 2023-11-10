const Select = ({
  name,
  multiple,
  values,
  selectedValues,
  handleChange,
  includeAll,
}) => {
  const options = includeAll ? [{ id: "all", name: "All" }, ...values] : values;

  return (
    <select
      name={name}
      multiple={multiple}
      value={selectedValues}
      onChange={handleChange}
    >
      {options.map((value) => {
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
