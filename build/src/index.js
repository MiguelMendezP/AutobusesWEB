"use strict";
/*npm run dev*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Initiañizations
const app = (0, express_1.default)();
// Settings
app.set('port', 4000);
// MIddlewares
// ROutes
// Static files
// starting the server
app.listen(app.get('port'), () => {
    console.log('Server en el puerto ' + app.get('port'));
});
console.log("Hola mundo");
