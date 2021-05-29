import { ISolicitud } from "../../Domain/Solicitud/SolicitudDefinitions";

export abstract class ModificarFechaAbstract {

    protected fechaInicio?: Date;
    protected fechaFin?: Date;
    protected solicitud: ISolicitud;

    constructor(solicitud: ISolicitud) {
        this.solicitud = solicitud;
    }

    async execute(): Promise<void> {
        this.verificaTipoSolicitud();
        await this.modificaFechas();
    }

    abstract verificaTipoSolicitud(): void;

    abstract modificaFechas(): Promise<void>;

    getSolicitud(): ISolicitud {
        return this.solicitud;
    }

}