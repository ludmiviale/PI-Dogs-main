const axios = require("axios");
require("dotenv").config();
const { URL, API_KEY } = process.env;
const { Dog } = require("../../db");

const getDogByName = async (name) => {};

module.exports = {
  getDogByName,
};
