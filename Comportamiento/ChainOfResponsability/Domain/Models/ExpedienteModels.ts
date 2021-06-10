import { ETipoEvento, IEvento, IEventoClinico, IEventoHospitalizacion, IEventoIncapacidad, IEventoMuerte } from "../Expediente";

export class AbstractEvento implements IEvento {
    protected _fechaApertura: Date = new Date();
    protected _tipo: ETipoEvento;

    constructor(tipo: ETipoEvento){
        this._tipo = tipo
    }

    set fechaApertura(fechaApertura: Date) {
        this._fechaApertura = fechaApertura
    }

    get fechaApertura() {
        return this._fechaApertura
    }
    get tipo() {
        return this._tipo
    }

}

export abstract class AbstractEventoClinico extends AbstractEvento implements IEventoClinico {
    protected _fechaInicio: Date;
    protected _fechaFin: Date;

    constructor(tipo: ETipoEvento){
        super(tipo);
        this._fechaInicio = new Date();
        this._fechaFin = new Date();
    }

    set fechaInicio(fechaInicio:Date){
        this._fechaInicio = fechaInicio
    }
    set fechaFin(fechaFin: Date) {
        this._fechaFin = fechaFin
    }

    get fechaInicio() {
        return this._fechaInicio
    }
    get fechaFin() {
        return this._fechaFin
    }

}

export class EventoHospitalizacion extends AbstractEventoClinico implements IEventoHospitalizacion {
    private _atencion: string = '';
    constructor(){
        super(ETipoEvento.hospitalizacion)
    }
    set atencion(atencion: string) {
        this._atencion = atencion
    }
    get atencion() {
        return this._atencion
    }
}

export class EventoIncapacidad extends AbstractEventoClinico implements IEventoIncapacidad {
    private _diagnostico: string = '';
    constructor() {
        super(ETipoEvento.incapacidad)
    }
    set diagnostico(diagnostico: string) {
        this._diagnostico = diagnostico
    }
    get diagnostico() {
        return this._diagnostico
    }
}

export class EventoMuerte extends AbstractEvento implements IEventoMuerte {
    private _fechaMuerte: Date = new Date();
    constructor() {
        super(ETipoEvento.muerte)
    }
    set fechaMuerte(fechaMuerte: Date) {
        this._fechaMuerte = fechaMuerte
    }
    get fechaMuerte() {
        return this._fechaMuerte
    }
}