import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { getAllDogs, getDogByName } from "../../redux/actions";

import Nav from "../../components/nav/Nav";
import Cards from "../../components/cards/Cards";

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);

  //Filtro con el backend
  const [searchString, setSearchString] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getDogByName(searchString));
  };

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  return (
    <div>
      <p> Esta es la Home Page </p>
      <Nav handleChange={handleChange} handleSubmit={handleSubmit} />
      <Cards allDogs={allDogs} />
    </div>
  );
}

export default Home;
