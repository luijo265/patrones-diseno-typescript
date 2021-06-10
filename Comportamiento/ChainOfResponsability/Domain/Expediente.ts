import { AbstractEvento } from "./Models/ExpedienteModels";

export interface IReserva {
    reserva: number;
    capital: number;
}

export enum ETipoEvento {
    incapacidad,
    muerte,
    hospitalizacion
}

export enum ETipoAplicacion {
    autogestion,
    asesores
}

export interface IEvento {
    fechaApertura: Date;
    tipo: ETipoEvento;
}

export interface IEventoClinico extends IEvento {
    fechaInicio: Date;
    fechaFin: Date;
}

export interface IEventoHospitalizacion extends IEventoClinico {
    atencion: string;
}

export interface IEventoIncapacidad extends IEventoClinico {
    diagnostico: string;
}

export interface IEventoMuerte extends IEvento {
    fechaMuerte: Date;
}

export interface IUsuario {
    nombre: string;
    edad: number;
    deuda: number;
    dni: string;
}

export interface IExpediente {
    nmexpdiente: string;
    aplicacion: ETipoAplicacion;
    reserva: IReserva;
    evento: AbstractEvento;
    usuario: IUsuario;
}