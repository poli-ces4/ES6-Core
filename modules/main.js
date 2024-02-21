import Animal from "./Animal.js";
import validaToken, { API_KEY, PERFILES } from "./helper.js";
//import validaToken,  * as helper from "./helper.js";

const animal = new Animal("Leon");
console.log(validaToken());
console.log(PERFILES[0]);
//console.log(helper.message)
