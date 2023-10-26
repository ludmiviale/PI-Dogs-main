const axios = require("axios");
require("dotenv").config();
const { URL, API_KEY } = process.env;
const { Dog, Temperament } = require("../../db");

const getAllDogsFromApi = async () => {
  const { data } = await axios(`${URL}?api_key=${API_KEY}`);

  //construir un objeto utilizando la información que viene de la api
  const allDogsApi = data.map((dog) => {
    return {
      key: dog.id,
      id: dog.id,
      name: dog.name,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
      reference_image_id: dog.image.url,
    };
  });
  return allDogsApi;
};

const getAllDogsFromDB = async () => {
  const allDogsDB = await Dog.findAll({
    include: [{ model: Temperament, atributes: ["name"] }],
  });
  return allDogsDB.map((dog) => {
    return {
      key: dog.id,
      id: dog.id,
      name: dog.name,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
      //reference_image_id: dog.image,
      //temperaments: dog.Temperament.map((temperament) => temperament.name),
    };
  });
};

module.exports = {
  getAllDogsFromApi,
  getAllDogsFromDB,
};
