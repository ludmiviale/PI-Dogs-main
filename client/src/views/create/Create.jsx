import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validation from "./validation";
import Select from "../../components/select/Select";
import { createDog, getAllTemperaments } from "../../redux/actions";
import "./create.css";
import icon from "../../assets/icon.jpeg";

const Create = () => {
  const [newDogData, setNewDogData] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    maxLifeSpan: "",
    minLifeSpan: "",
    referenceImage: "",
  });
  const [errors, setErrors] = useState({});
  const [temperament, setTemperament] = useState([]);
  const [isDogCreated, setIsDogCreated] = useState(false);

  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    setErrors(validation(newDogData));
  }, [newDogData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "temperaments") {
      if (!temperament.includes(value)) {
        setTemperament([...temperament, value]);
      } else {
        setTemperament(temperament.filter((temp) => temp !== value));
      }
    } else {
      setNewDogData({ ...newDogData, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      dispatch(createDog({ ...newDogData, temperaments: temperament }));
      setIsDogCreated(true);
    } catch (error) {
      setIsDogCreated(false);
    }
  };

  return (
    <div className="form-container">
      {!isDogCreated ? (
        <form onSubmit={handleSubmit} className="form">
          <Link to="/home" className="home-link">
            <img src={icon} />
          </Link>
          <h3>Dog breed creation form</h3>
          <div className="name-field">
            <label htmlFor="name">Name:</label>
            <input
              autoComplete="off"
              type="text"
              name="name"
              value={newDogData.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div className="weight">
            <div className="weight-fields">
              <label htmlFor="minWeight">Minimun weight:</label>
              <input
                autoComplete="off"
                type="number"
                min="1"
                name="minWeight"
                value={newDogData.minWeight}
                onChange={handleChange}
              />
              {errors.minWeight && <p>{errors.minWeight}</p>}
            </div>

            <div className="weight-fields">
              <label htmlFor="maxWeight">Maximum weight:</label>
              <input
                autoComplete="off"
                type="number"
                min="1"
                name="maxWeight"
                value={newDogData.maxWeight}
                onChange={handleChange}
              />
              {errors.maxWeight && <p>{errors.maxWeight}</p>}
            </div>
          </div>

          <div className="height">
            <div className="height-fields">
              <label htmlFor="minHeight">Minimun height:</label>
              <input
                autoComplete="off"
                type="number"
                min="1"
                name="minHeight"
                value={newDogData.minHeight}
                onChange={handleChange}
              />
              {errors.minHeight && <p>{errors.minHeight}</p>}
            </div>
            <div className="height-fields">
              <label htmlFor="maxHeight">Maximum height:</label>
              <input
                autoComplete="off"
                type="number"
                min="1"
                name="maxHeight"
                value={newDogData.maxHeight}
                onChange={handleChange}
              />
              {errors.maxHeight && <p>{errors.maxHeight}</p>}
            </div>
          </div>

          <div className="life-span">
            <div className="lif-span-fields">
              <label htmlFor="minLifeSpan">Minimun life span:</label>
              <input
                autoComplete="off"
                type="number"
                min="1"
                name="minLifeSpan"
                value={newDogData.minLifeSpan}
                onChange={handleChange}
              />
              {errors.minLifeSpan && <p>{errors.minLifeSpan}</p>}
            </div>

            <div className="life-span-fields">
              <label htmlFor="maxLifeSpan">Maximun life span:</label>
              <input
                autoComplete="off"
                type="number"
                max="30"
                name="maxLifeSpan"
                value={newDogData.maxLifeSpan}
                onChange={handleChange}
              />
              {errors.maxLifeSpan && <p>{errors.maxLifeSpan}</p>}
            </div>
          </div>

          <div className="reference-image-field">
            <label htmlFor="referenceImage">Image:</label>
            <input
              autoComplete="off"
              type="text"
              name="referenceImage"
              value={newDogData.referenceImage}
              onChange={handleChange}
            />
            {errors.referenceImage && <p>{errors.referenceImage}</p>}
          </div>

          <div className="selected-temperaments">
            <label htmlFor="temperaments">
              Temperaments:{" "}
              {temperament.length > 0 && (
                <p id="temperaments">{temperament.join(", ")}</p>
              )}
            </label>
            <Select
              name="temperaments"
              multiple={true}
              values={temperaments}
              selectedValues={newDogData.temperament}
              handleChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={
              Object.keys(errors).length > 0 || temperament.length === 0
            }
          >
            Create
          </button>
        </form>
      ) : (
        <>
          <div className="success-container">
            <div className="success">
              <Link to="/home" className="home-link">
                <img src={icon} />
              </Link>
              <p>Successfully created dog</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Create;
