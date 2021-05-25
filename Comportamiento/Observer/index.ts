import { ControlIdiomaService } from "./ControlIdioma/ControlIdiomaService";
import { IdiomaDto } from "./ControlIdioma/IdiomaDto";
import { EIdioma } from "./Traduccion/TraduccionDefinitions";
import { TraduccionService } from "./Traduccion/TraduccionService";

const controlIdioma = new ControlIdiomaService(new IdiomaDto());
const traduccion = new TraduccionService(controlIdioma.getIdioma());
controlIdioma.addObserser(traduccion);

console.log("se inicia la aplicacion");
console.log("se tiene las siguientes traducciones", traduccion.getTraduccion());

console.log("\nse actualiza el idioma a ingles");
controlIdioma.setIdioma(EIdioma.en);
console.log("se tiene las siguientes traducciones", traduccion.getTraduccion());

console.log("\nse actualiza el idioma a español");
controlIdioma.setIdioma(EIdioma.es);
console.log("se tiene las siguientes traducciones", traduccion.getTraduccion());
