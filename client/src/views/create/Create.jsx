import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import validation from "./validation";
import Select from "../../components/select/Select";
import { createDog, getAllTemperaments } from "../../redux/actions";

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
    if (!temperament.length) dispatch(getAllTemperaments());
  }, []);

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={newDogData.name}
        onChange={handleChange}
      />
      {errors.name && <p>{errors.name}</p>}

      <label htmlFor="minHeight">Minimun height:</label>
      <input
        type="text"
        name="minHeight"
        value={newDogData.minHeight}
        onChange={handleChange}
      />
      {errors.minHeight && <p>{errors.minHeight}</p>}

      <label htmlFor="maxHeight">Maximum height:</label>
      <input
        type="text"
        name="maxHeight"
        value={newDogData.maxHeight}
        onChange={handleChange}
      />
      {errors.maxHeight && <p>{errors.maxHeight}</p>}

      <label htmlFor="minWeight">Minimun weight:</label>
      <input
        type="text"
        name="minWeight"
        value={newDogData.minWeight}
        onChange={handleChange}
      />
      {errors.minWeight && <p>{errors.minWeight}</p>}

      <label htmlFor="maxWeight">Maximum weight:</label>
      <input
        type="text"
        name="maxWeight"
        value={newDogData.maxWeight}
        onChange={handleChange}
      />
      {errors.maxWeight && <p>{errors.maxWeight}</p>}

      <label htmlFor="minLifeSpan">Minimun life span:</label>
      <input
        type="text"
        name="minLifeSpan"
        value={newDogData.minLifeSpan}
        onChange={handleChange}
      />
      {errors.minLifeSpan && <p>{errors.minLifeSpan}</p>}

      <label htmlFor="maxLifeSpan">Maximun life span:</label>
      <input
        type="text"
        name="maxLifeSpan"
        value={newDogData.maxLifeSpan}
        onChange={handleChange}
      />
      {errors.maxLifeSpan && <p>{errors.maxLifeSpan}</p>}

      <label htmlFor="referenceImage">Image:</label>
      <input
        type="text"
        name="referenceImage"
        value={newDogData.referenceImage}
        onChange={handleChange}
      />
      {errors.referenceImage && <p>{errors.referenceImage}</p>}

      <label htmlFor="temperaments">Temperaments:</label>
      <Select
        name="temperaments"
        values={temperaments}
        selectedValues={temperament}
        handleChange={handleChange}
      />
      {temperament && <p>{temperament}</p>}
      <button
        type="submit"
        disabled={Object.keys(errors).length > 0 || temperament.length === 0}
      >
        Create
      </button>
      {isDogCreated && <p>Successfully created dog</p>}
    </form>
  );
};

export default Create;

//ORDENAMIENTO dentro de los filtros -> filtros combinados
//allDogs: state.allDosgCopy.filter(element => type === element.type)
