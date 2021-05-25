import { IIdioma } from "../ControlIdioma/ControlIdiomaDefinitions";
import { IObserver } from "../Observer/ObserverDefinitions";
import { traducciones } from "./Traduccion";
import { TTraduccion } from "./TraduccionDefinitions";

export class TraduccionService implements IObserver {

    private region:string;

    constructor(region:string){
        this.region = region;
    }

    getName(): string{
        return "traduccion";
    }

    notify(idioma: IIdioma): void {
        console.log("region actualizada\n")
        this.region = idioma.idioma;
    }

    getTraduccion(): TTraduccion{
        return traducciones[this.region];
    }
}