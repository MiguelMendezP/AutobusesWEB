import { Request, Response } from "express";

class CreacionSalidas{

    public crearSalida(req:Request,res:Response):void{
        res.render("administrador/creacionSalida-view",{
            title: 'Creacion de Salidas'
        });
    }
}

export const creacionSalidas = new CreacionSalidas();