const { getAllDogs } = require("../controllers/dogsControllers/getAllDogs");
const { getDogByName } = require("../controllers/dogsControllers/getDogByName");
const { getBreedById } = require("../controllers/dogsControllers/getBreedById");
const { createDog } = require("../controllers/dogsControllers/createDog");

// el handler es una función que se va a encargar de recibir la req, de unificar datos y devolver la respuesta
// invoca al controller, porque el handler nunca interactúa con fuentes externas

const getDogsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const dogByName = await getDogByName(name);
      res.status(200).json(dogByName);
    } else {
      const allDogs = await getAllDogs();
      if (allDogs.length > 0) {
        res.status(200).json(allDogs);
      } else {
        res.status(404).json({ message: "Dogs not found" });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBreedByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const source = isNaN(id) ? "db" : "api";
    const response = await getBreedById(id, source);
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: "Breed not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDogHandler = async (req, res) => {
  const { name, height, weight, life_span, reference_image_id, temperaments } =
    req.body;
  try {
    const newDog = await createDog(
      name,
      height,
      weight,
      life_span,
      reference_image_id,
      temperaments
    );
    res.status(201).json(newDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDogsHandler,
  getBreedByIdHandler,
  createDogHandler,
};
