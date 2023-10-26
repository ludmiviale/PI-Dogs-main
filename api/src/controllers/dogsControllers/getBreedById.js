const axios = require("axios");
require("dotenv").config();
const { URL, API_KEY } = process.env;
const { Dog } = require("../../db");

const getBreedById = async (id, source) => {
  const dog =
    source === "api"
      ? (await axios(`${URL}/${id}/?api_key=${API_KEY}`)).data
      : await Dog.findByPk(id);
  return dog;
};

module.exports = {
  getBreedById,
};
