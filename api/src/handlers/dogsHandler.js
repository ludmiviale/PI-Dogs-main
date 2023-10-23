// el handler es una función que se va a encargar de recibir la req, de unificar datos y devolver la respuesta
// invoca al controller, porque el handler nunca interactúa con fuentes externas
const getDogsHandler = (req, res) => {
  try {
    const { name } = req.query;
    if (name) res.status(200).send(`Aquí está la raza ${name}`);
    res.status(200).send("Aquí están todos los dogs");
  } catch (error) {}
};

const getBreedByIdHandler = (req, res) => {
  try {
    const { idBreed } = req.params;
    res.status(200).send(`Raza por ID: ${idBreed}`);
  } catch (error) {}
};

const createDogHandler = (req, res) => {
  try {
    const {
      id,
      name,
      height,
      height_unit,
      weight,
      weight_unit,
      life_span,
      image_id,
    } = req.body;
    res.status(200).send(`Dog: ${name}`);
  } catch (error) {}
};

module.exports = {
  getDogsHandler,
  getBreedByIdHandler,
  createDogHandler,
};
