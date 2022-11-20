import { DataTypes } from 'sequelize';
import { database } from '../database/connection';

const Usuario = database.define("Usuario", {
    correo:{
        type:DataTypes.STRING
    },
    contrasenia:{
        type:DataTypes.STRING
    }
});

export default Usuario;