const { Dog } = require("../../db");

const updateDog = async (id, newHeight, newWeight) => {
  const dogFound = await Dog.findByPk(id);
  if (dogFound) {
    await Dog.update(
      { height: newHeight, weight: newWeight },
      { where: { id: id } }
    );
    return "Dog updated successfully";
  } else {
    return "Not found";
  }
};

module.exports = {
  updateDog,
};
