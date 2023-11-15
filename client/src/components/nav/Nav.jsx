import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filtersAndSorts } from "../../redux/actions";
import "./nav.css";

const Nav = ({ handlePageChange }) => {
  const dispatch = useDispatch();
  const { allDogs, temperaments, filters, sort } = useSelector(
    (state) => state
  );

  const handleFilterChange = (event) => {
    dispatch(
      filtersAndSorts(
        allDogs,
        { ...filters, [event.target.name]: event.target.value },
        sort
      )
    );
    handlePageChange(1);
  };

  const handleSortChange = (event) => {
    dispatch(filtersAndSorts(allDogs, filters, event.target.value));
    handlePageChange(1);
  };

  return (
    <nav className="nav">
      <div className="filters-container">
        <div className="filter">
          <label htmlFor="search">Filter by name:</label>
          <input
            autoComplete="off"
            id="search"
            type="search"
            name="search"
            value={filters?.search}
            placeholder="Type for search"
            onChange={(event) => handleFilterChange(event)}
          />
        </div>
        <div className="filter">
          <label htmlFor="source">Filter by source:</label>
          <select
            id="source"
            name="source"
            onChange={(event) => handleFilterChange(event)}
            value={filters?.source}
          >
            <option value="all">All</option>
            <option value="api">Api</option>
            <option value="database">Database</option>
          </select>
        </div>

        <div className="filter">
          <label htmlFor="temperament">Filter by temperament:</label>
          <select
            id="temperament"
            name="temperament"
            onChange={(event) => handleFilterChange(event)}
            value={filters?.temperament}
          >
            <option value="all">All</option>
            {temperaments.map((temperament) => (
              <option key={temperament.id} value={temperament.name}>
                {temperament.name}
              </option>
            ))}
          </select>
        </div>

        <div className="filter">
          <label htmlFor="sort">Sort:</label>
          <select
            id="sort"
            name="sort"
            onChange={(event) => handleSortChange(event)}
            value={sort}
          >
            <option value="">None</option>
            <option value="alphabeticalAsc">Alphabetically A-Z</option>
            <option value="alphabeticalDesc">Alphabetically Z-A</option>
            <option value="lowerWeight">Lower weight</option>
            <option value="greaterWeight">Greater weight</option>
          </select>
        </div>
        <div className="filter">
          <Link to="/create">
            <button id="create">ADD</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
