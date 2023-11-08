import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Landing from "./views/landing/Landing";
import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import Create from "./views/create/Create";
import { getDogs, getAllTemperaments } from "./redux/actions";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs(""));
    dispatch(getAllTemperaments());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />

        <Route path="/home/:id" element={<Detail />} />

        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
