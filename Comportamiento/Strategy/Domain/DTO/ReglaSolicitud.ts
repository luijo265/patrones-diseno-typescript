export interface IReglaSolicitud {
    tieneRegla: boolean;
    cumpleRegla: boolean;
}

export class ReglaSolicitud implements IReglaSolicitud {

    private _tieneRegla: boolean;
    private _cumpleRegla: boolean;

    constructor(){
        this._tieneRegla = false
        this._cumpleRegla = false
    }

    get tieneRegla() {return this._tieneRegla;}
    get cumpleRegla() {return this._cumpleRegla;}

    set tieneRegla(value:boolean) { this._tieneRegla = value; }
    set cumpleRegla(value:boolean) { this._cumpleRegla = value; }

}