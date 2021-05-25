import { IIdioma } from "./ControlIdiomaDefinitions";

export class IdiomaDto implements IIdioma {
    private _idioma: string = "es";

    get idioma(){
        return this._idioma;
    }

    set idioma(idioma:string) {
        this._idioma = idioma;
    }

}