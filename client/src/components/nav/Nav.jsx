import { useSelector } from "react-redux";
import Select from "../select/Select";

const Nav = ({
  handleChange,
  handleSubmit,
  searchString,
  handleFilterSource,
  handleFilterTemperament,
  handleSortAlphabetically,
}) => {
  const temperaments = useSelector((state) => state.temperaments);

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

        <label htmlFor="sortAlphabetically">Sort alphabetically:</label>
        <select name="sortAlphabetically" onChange={handleSortAlphabetically}>
          <option value="ascending">A-Z</option>
          <option value="descending">Z-A</option>
        </select>
      </form>
    </div>
  );
};

export default Nav;
