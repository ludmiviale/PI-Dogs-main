const { Dog } = require("../../db");

// las funciones de la base de datos son asíncronas
// hay que esperar que las peticiones a fuentes externas den una respuesta
const createDog = async (name, height, weight, life_span) => {
  return await Dog.create({
    name,
    height,
    weight,
    life_span,
  });
  //temperament.map(temperament)
  //newDog.addTemperament(temperament)
};

module.exports = {
  createDog,
};
