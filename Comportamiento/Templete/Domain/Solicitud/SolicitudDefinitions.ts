export enum ETipoSolicitud {
    retraso,
    adelanto,
    sincambio,
    cambiartipo
}

export interface ISolicitud {
    id: number;
    tipo: ETipoSolicitud;
    fechaInicio: Date;
    fechaFin: Date;
}