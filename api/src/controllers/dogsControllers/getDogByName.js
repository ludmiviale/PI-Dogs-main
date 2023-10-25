const axios = require("axios");
const { Dog } = require("../../db");
const { URL, API_KEY } = process.env;

const getDogByName = async (name) => {
  const dog =
    source === "api"
      ? (await axios(`${URL}/?name=${name}/?api_key=${API_KEY}`)).data
      : await Dog.findOne({ where: { name: name } });
  return dog;
};

module.exports = {
  getDogByName,
};
