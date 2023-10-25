const {
  getAllDogsFromApi,
  getAllDogsFromDB,
} = require("../controllers/dogsControllers/getAllDogs");
const { getDogByName } = require("../controllers/dogsControllers/getDogByName");
const { getBreedById } = require("../controllers/dogsControllers/getBreedById");
const { createDog } = require("../controllers/dogsControllers/createDog");

// el handler es una función que se va a encargar de recibir la req, de unificar datos y devolver la respuesta
// invoca al controller, porque el handler nunca interactúa con fuentes externas

const getDogsHandler = async (req, res) => {
  try {
    const dogsFromApi = await getAllDogsFromApi();
    const dogsFromDB = await getAllDogsFromDB();
    const allDogs = [...dogsFromApi, ...dogsFromDB];
    if (allDogs.length > 0) {
      res.status(200).json(allDogs);
    } else {
      res.status(404).json({ error: "Dogs not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDogByNameHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const response = await getDogByName(name);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const getBreedByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const source = isNaN(id) ? "db" : "api";
    const response = await getBreedById(id, source);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createDogHandler = async (req, res) => {
  try {
    const { name, height, weight, life_span, image_id, temperament } = req.body;
    const newDog = await createDog(
      name,
      height,
      weight,
      life_span,
      image_id,
      temperament
    );
    res.status(200).json(newDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDogsHandler,
  getDogByNameHandler,
  getBreedByIdHandler,
  createDogHandler,
};
