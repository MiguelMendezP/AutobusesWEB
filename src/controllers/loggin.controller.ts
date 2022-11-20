import { Request, Response } from "express";

class LoginController{
    public login(req:Request,res:Response):void{
        res.render("login/login-view",{
            title: 'Login'
        });
    }

    public register(req:Request,res:Response):void{
        res.render("login/register-view",{
            title: 'Register'
        });
    }
    //no jala revisar
    public registrarse(req: Request, res:Response){
        res.redirect('/register')
    }
}

export const loginController = new LoginController();