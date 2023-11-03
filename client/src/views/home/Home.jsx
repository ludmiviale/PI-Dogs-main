import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { dogsCleaner, getDogs } from "../../redux/actions";

import Nav from "../../components/nav/Nav";
import Cards from "../../components/cards/Cards";
import Pagination from "../../components/pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchString(event.target.value);
  };

  const fetchDogs = (name) => {
    dispatch(getDogs(name)).then(() => {
      setCurrentPage(1);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ name: searchString });
    fetchDogs(searchString);
    setSearchString("");
  };

  useEffect(() => {
    dispatch(dogsCleaner());
    let queryName = searchParams.get("name");
    if (queryName === null) {
      queryName = "";
    }
    setSearchString(queryName);
    fetchDogs(queryName);
  }, []);

  const totalDogs = allDogs?.length;
  const dogsPerPage = 8;
  const totalPages = Math.ceil(totalDogs / dogsPerPage);
  const startIndex = (currentPage - 1) * dogsPerPage;
  const endIndex = startIndex + dogsPerPage;
  const dogsToDisplay = allDogs?.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <p> Esta es la Home Page </p>
      <Nav
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <Pagination
        onPageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <Cards dogsToDisplay={dogsToDisplay} />
    </div>
  );
};

export default Home;
