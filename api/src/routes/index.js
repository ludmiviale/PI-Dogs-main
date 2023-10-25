const { Router } = require("express");
const router = Router();

const dogsRouter = require("./dogsRouter");
const temperamentRouter = require("./temperamentsRouter");

// de acuerdo a lo que diga la ruta "/...", voy a leer lo que se encuentre dentro del archivo especificado
router.use("/dogs", dogsRouter);
router.use("/temperaments", temperamentRouter);

module.exports = router;
