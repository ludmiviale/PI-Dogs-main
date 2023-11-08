import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "../select/Select";
import "./nav.css";

const Nav = ({
  handleChange,
  handleSubmit,
  searchString,
  handleFilterSource,
  handleFilterTemperament,
  handleSortAlphabetically,
  handleSortByWeight,
}) => {
  const temperaments = useSelector((state) => state.temperaments);

  return (
    <nav className="nav">
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="search-container">
          <input
            autoComplete="off"
            id="search"
            type="search"
            value={searchString}
            placeholder="Search breeds"
            onChange={(event) => handleChange(event)}
          />
          <button type="submit">Search</button>
        </div>

        <div className="filters-container">
          <div className="filter">
            <label htmlFor="source">Filter by source:</label>
            <select id="source" name="source" onChange={handleFilterSource}>
              <option value="all">All</option>
              <option value="api">Api</option>
              <option value="database">Database</option>
            </select>
          </div>

          <div className="filter">
            <label htmlFor="temperament">Filter by temperament:</label>
            <Select
              name="temperaments"
              values={temperaments}
              handleChange={handleFilterTemperament}
            />
          </div>

          <div className="filter">
            <label htmlFor="sortAlphabetically">Sort alphabetically:</label>
            <select
              id="sortAlphabetically"
              name="sortAlphabetically"
              onChange={handleSortAlphabetically}
            >
              <option value="ascending">A-Z</option>
              <option value="descending">Z-A</option>
            </select>
          </div>

          <div className="filter">
            <label htmlFor="sortByWeight">Sort by weight:</label>
            <select
              id="sortByWeight"
              name="sortByWeight"
              onChange={handleSortByWeight}
            >
              <option value="lowerWeight">Lower weight</option>
              <option value="greaterWeight">Greater weight</option>
            </select>
          </div>
        </div>
        <Link to="/create">
          <button id="create">ADD</button>
        </Link>
      </form>
    </nav>
  );
};

export default Nav;
