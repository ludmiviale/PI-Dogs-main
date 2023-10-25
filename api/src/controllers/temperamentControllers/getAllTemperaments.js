const axios = require("axios");
require("dotenv").config();
const { URL, API_KEY } = process.env;
const { Temperament } = require("../../db");

const getAllTemperaments = async (req, res) => {
  const { data } = await axios(`${URL}?api_key=${API_KEY}`);

  const temperaments = data
    .filter((dog) => dog.temperament)
    .map((dog) => {
      return {
        name: dog.temperament,
      };
    });

  const allTemperaments = [
    ...new Set(
      temperaments
        .map((dog) => dog.name)
        .join(", ")
        .split(", ")
        .sort()
        .filter(Boolean)
    ),
  ];

  for (const temperament of allTemperaments) {
    await Temperament.create({ name: temperament });
  }
  return allTemperaments;
};

module.exports = {
  getAllTemperaments,
};

/*

const allTemperaments = [
    ...temperaments.reduce(
      (set, { name }) =>
        name
          .split(",")
          .map((n) => n.trim())
          .reduce((s, n) => s.add(n), set),
      new Set()
    ),
  ];

    const allTemperaments = new Set(
      temperaments.map((element) => element.name.split(", ")).flat()
    );

  const allTemperaments = [
    ...new Set(temperaments.join(", ").split(", ").sort().filter(Boolean)),
  ];

const getAllTemperaments = async () => {
  const { data } = await axios(`${URL}?api_key=${API_KEY}`);

  const temperaments = data.map((dog) => {
    return {
      name: dog.temperament,
    };
  });

  const uniqueTemp = [
    ...new Set(temperaments.join(", ").split(", ").sort().filter(Boolean)),
  ];
  
  return new Set(
    temperaments
      .map((element) => {
        if (element.name) {
          return element.name.split(", ");
        } else {
          return [];
        }
      })
      .flat()
  );
  return uniqueTemp;
};

module.exports = {
  getAllTemperaments,
};

/*const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Temperament } = require("../../db");
const URL = "https://api.thedogapi.com/v1/breeds";

const getAllTemperaments = async () => {
  const { data } = await axios(`${URL}?api_key=${API_KEY}`);

  const temperaments = data.map((dog) => {
    return {
      name: dog.temperament,
    };
  });


  const allTemperaments = new Set(
    temperaments.map((element) => element.name.split(", ")).flat()
  );
  
  
  return allTemperaments;
};

module.exports = {
  getAllTemperaments,
};




  const saveTemperaments = async (temperaments) => {
    for (const temperamentData of temperaments) {
      const { name } = temperamentData;

      if (name) {
        await Temperament.findOrCreate({
          where: { name },
          defaults: { name },
        });
      }
    }
  };
  await saveTemperaments(temperaments);

  const uniqueTemp = [
    ...new Set(saveTemperaments.join(", ").split(", ").sort().filter(Boolean)),
  ];
  return uniqueTemp;
*/
