/*npm run dev*/

import express, { Application } from "express";
import morgan from "morgan";
import path from 'path';
import dotenv from "dotenv";
dotenv.config();

// Importing Routes
import LoginRoutes from "./routes/loggin.router";
import CrearSalidaRoutes from "./routes/creacionSalida.router";
import BuscarController from "./routes/buscar.router";

// Initializations
const app: Application = express();

// Settings 
app.set("port", process.env.PORT || 4000);
app.set("view engine","ejs");
app.set('views', path.join(__dirname, './views'));


// MIddlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')))


// Routes
app.use("/", LoginRoutes);
app.use("/salidas", CrearSalidaRoutes);
app.use("/buscar", BuscarController);


// starting the server
app.listen(app.get('port'),() => {
    console.log('Server en el puerto ' + app.get('port'));
})

export default app;
