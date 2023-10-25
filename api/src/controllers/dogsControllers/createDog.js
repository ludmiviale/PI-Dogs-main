const { Dog } = require("../../db");

// las funciones de la base de datos son asíncronas
// hay que esperar que las peticiones a fuentes externas den una respuesta
const createDog = async (
  name,
  height,
  weight,
  life_span,
  reference_image_id
) => {
  return await Dog.create({
    name,
    height,
    weight,
    life_span,
    reference_image_id,
  });
  //temperament.map(temperament)
  //newDog.addTemperament(temperament)
};

module.exports = {
  createDog,
};
