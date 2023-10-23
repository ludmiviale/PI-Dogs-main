const { Router } = require("express");
const dogsRouter = require("./dogsRouter");

const router = Router();

// de acuerdo a lo que diga la ruta "/...", voy a leer lo que se encuentre dentro del archivo especificado
router.use("/dogs", dogsRouter);

module.exports = router;
