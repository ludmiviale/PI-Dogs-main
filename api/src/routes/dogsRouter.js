const { Router } = require("express");
const dogsRouter = Router();
const {
  getDogsHandler,
  getBreedByIdHandler,
  createDogHandler,
} = require("../handlers/dogsHandler");

// acá se van a ejecutar los métodos con la response especificada, dependiendo del endpoint al que intento acceder
dogsRouter.get("/", getDogsHandler);
dogsRouter.get("/:idBreed", getBreedByIdHandler);
dogsRouter.post("/", createDogHandler);

module.exports = dogsRouter;
