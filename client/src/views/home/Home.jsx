import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  filterBySource,
  filterByTemperament,
  sortAlphabetically,
  sortByWeight,
} from "../../redux/actions";
import Nav from "../../components/nav/Nav";
import Cards from "../../components/cards/Cards";
import Pagination from "../../components/pagination/Pagination";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { allDogs, allDogsCopy } = useSelector((state) => state);

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchDogs = (name) => {
    dispatch(getDogs(name)).then(() => {
      setCurrentPage(1);
    });
  };

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ name: searchString });
    fetchDogs(searchString);
    setSearchString("");
  };

  useEffect(() => {
    let queryName = searchParams.get("name");
    queryName = queryName === null ? "" : queryName;
    setSearchString(queryName);
  }, []);

  const totalDogs = allDogsCopy?.length;
  const dogsPerPage = 8;
  const totalPages = Math.ceil(totalDogs / dogsPerPage);
  const startIndex = (currentPage - 1) * dogsPerPage;
  const endIndex = startIndex + dogsPerPage;
  const dogsToDisplay = allDogsCopy?.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleFilterTemperament = (event) => {
    dispatch(filterByTemperament(event.target.value));
    setCurrentPage(1);
  };

  const handleFilterSource = (event) => {
    dispatch(filterBySource(event.target.value));
    setCurrentPage(1);
  };

  const handleSortAlphabetically = (event) => {
    dispatch(sortAlphabetically(event.target.value));
    setCurrentPage(1);
  };

  const handleSortByWeight = (event) => {
    dispatch(sortByWeight(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div>
      <Nav
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
        handleFilterTemperament={handleFilterTemperament}
        handleFilterSource={handleFilterSource}
        handleSortAlphabetically={handleSortAlphabetically}
        handleSortByWeight={handleSortByWeight}
      />
      <Pagination
        onPageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      {allDogs.length > 0 ? (
        !allDogsCopy.length ? (
          <p className="home">There are no dogs</p>
        ) : (
          <Cards dogsToDisplay={dogsToDisplay} />
        )
      ) : (
        <p className="home">Loading</p>
      )}
    </div>
  );
};

export default Home;
