const { Router } = require("express");
const dogsRouter = Router();
const {
  getDogsHandler,
  createDogHandler,
  getBreedByIdHandler,
} = require("../handlers/dogsHandler");

// acá se van a ejecutar los métodos con la response especificada, dependiendo del endpoint al que intento acceder
dogsRouter.get("/", getDogsHandler);
dogsRouter.get("/:id", getBreedByIdHandler);
dogsRouter.post("/", createDogHandler);

module.exports = dogsRouter;
