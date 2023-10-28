const { Router } = require("express");
const dogsRouter = Router();
const {
  getDogsHandler,
  getBreedByIdHandler,
  createDogHandler,
  updateDogHandler,
  deleteDogHandler,
} = require("../handlers/dogsHandler");

// acá se van a ejecutar los métodos con la response especificada, dependiendo del endpoint al que intento acceder
dogsRouter.get("/", getDogsHandler);
dogsRouter.get("/:id", getBreedByIdHandler);
dogsRouter.post("/", createDogHandler);
dogsRouter.put("/:id", updateDogHandler);
dogsRouter.delete("/:id", deleteDogHandler);

module.exports = dogsRouter;
