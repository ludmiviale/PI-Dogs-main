import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTemperaments, getDogs } from "../../redux/actions";
import Nav from "../../components/nav/Nav";
import Cards from "../../components/cards/Cards";
import Pagination from "../../components/pagination/Pagination";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { allDogs, allDogsCopy, filters, sort } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getDogs(filters, sort));
    dispatch(getAllTemperaments());
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

  return (
    <div>
      <Nav handlePageChange={handlePageChange} />
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
