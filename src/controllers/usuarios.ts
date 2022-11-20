import { Request, Response } from "express";
import Usuario from '../models/usuario';

export async function getUsuario(req: Request, res:Response){

    const usuarios = await Usuario.findAll();

    res.json(usuarios);
}