const axios = require("axios");
require("dotenv").config();
const { URL, API_KEY } = process.env;
const { Dog, Temperament } = require("../../db");

const getAllDogsFromApi = async () => {
  const { data } = await axios(`${URL}?api_key=${API_KEY}`);
  const allDogsApi = data.map((dog) => {
    return {
      key: dog.id,
      id: dog.id,
      name: dog.name,
      height: dog.height.metric,
      weight: dog.weight.metric,
      life_span: dog.life_span,
      temperament: dog.temperament,
      reference_image_id: dog.image.url,
    };
  });
  return allDogsApi;
};

const getAllDogsFromDB = async () => {
  const allDogsDB = await Dog.findAll({
    include: [{ model: Temperament, attributes: ["name"] }],
  });
  return allDogsDB.map((dog) => {
    return {
      key: dog.id,
      id: dog.id,
      name: dog.name,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
      temperament: dog.temperaments
        .map((temperament) => temperament.name)
        .join(", "),
      reference_image_id: dog.reference_image_id,
    };
  });
};

module.exports = {
  getAllDogsFromApi,
  getAllDogsFromDB,
};
