const { Dog, Temperament } = require("../../db");

const createDog = async (
  name,
  height,
  weight,
  life_span,
  reference_image_id,
  temperaments
) => {
  const newDog = await Dog.create({
    name,
    height,
    weight,
    life_span,
    reference_image_id,
  });

  const allTemperaments = await Temperament.findAll({
    where: {
      name: temperaments,
    },
  });

  await allTemperaments.map((temperament) =>
    newDog.addTemperament(temperament)
  );

  return newDog;
};

module.exports = createDog;
