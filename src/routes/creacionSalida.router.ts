import {Router} from "express";
import {creacionSalidas} from "../controllers/creacionSalida.controller";

const crarSalida: Router = Router();

//Ruta
crarSalida.get("/",creacionSalidas.crearSalida);

export default crarSalida;
