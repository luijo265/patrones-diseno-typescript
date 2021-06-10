import { IParticipante } from "./Participante";

export interface ISolicitud {
    dias: number;
    participantes: IParticipante[];
    tipo: ETipoSolicitud;
}

export enum ETipoSolicitud {
    personal,
    grupal,
}