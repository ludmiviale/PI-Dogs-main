import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { dogsCleaner, getAllDogs, getDogByName } from "../../redux/actions";

import Nav from "../../components/nav/Nav";
import Cards from "../../components/cards/Cards";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  let [searchParams, setSearchParams] = useSearchParams();

  const [searchString, setSearchString] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ name: searchString });
    dispatch(getDogByName(searchString));
  };

  useEffect(() => {
    console.log(searchParams.get("name"));
    dispatch(dogsCleaner());
    const queryName = searchParams.get("name");
    if (queryName !== null) {
      setSearchString(queryName);
      dispatch(getDogByName(queryName));
    } else {
      dispatch(getAllDogs());
    }
  }, []);

  return (
    <div>
      <p> Esta es la Home Page </p>
      <Nav
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <Cards allDogs={allDogs} />
    </div>
  );
};

export default Home;
