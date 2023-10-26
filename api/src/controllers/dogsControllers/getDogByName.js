const axios = require("axios");
require("dotenv").config();
const { URL, API_KEY } = process.env;
const { Dog } = require("../../db");
const { getAllDogsFromApi, getAllDogsFromDB } = require("./getAllDogs");

const getDogByName = async (name) => {
  const dogsApi = getAllDogsFromApi();

  const dogApi = dogsApi.filter((dog) => dog.name === name);

  const dogDB = await Dog.findAll({ where: { name: name } });

  return [...dogApi, dogDB];
};

module.exports = {
  getDogByName,
};

/**
 * if (name) {
 * let fog = dogs.filter(name)
 * res.send(dog)
 * }
 */
