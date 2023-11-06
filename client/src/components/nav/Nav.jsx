import { useSelector } from "react-redux";
import Select from "../select/Select";

const Nav = ({
  handleChange,
  handleSubmit,
  searchString,
  handleFilterSource,
  handleFilterTemperament,
}) => {
  const temperaments = useSelector((state) => state.temperaments);
  const sources = [
    { id: "all", name: "All" },
    { id: "api", name: "API" },
    { id: "database", name: "Database" },
  ];

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="search"
          value={searchString}
          placeholder="Search breeds"
          onChange={(event) => handleChange(event)}
        />
        <button type="submit">Search</button>

        <label htmlFor="source">Filter by source:</label>
        <select name="source" onChange={handleFilterSource}>
          <option value="all">All</option>
          <option value="api">Api</option>
          <option value="database">Database</option>
        </select>

        <label htmlFor="temperament">Filter by temperament:</label>
        <Select
          name="temperaments"
          values={temperaments}
          handleChange={handleFilterTemperament}
          keySelector={(value) => value.id}
        />
      </form>
    </div>
  );
};

export default Nav;
