const { Router } = require("express");
const temperamentRouter = Router();
const { getTemperamentsHandler } = require("../handlers/temperamentsHandler");

// acá se van a ejecutar los métodos con la response especificada, dependiendo del endpoint al que intento acceder
temperamentRouter.get("/", getTemperamentsHandler);

module.exports = temperamentRouter;
