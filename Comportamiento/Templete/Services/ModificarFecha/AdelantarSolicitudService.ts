import { ETipoSolicitud } from "../../Domain/Solicitud/SolicitudDefinitions";
import { ModificarFechaAbstract } from "./ModificarFechaAbstract";

export class AdelantarSolicitudService extends ModificarFechaAbstract {

    async execute(): Promise<void> {
        this.verificaTipoSolicitud();
        await this.modificaFechas();
    }

    verificaTipoSolicitud(): void {
        if (this.solicitud.tipo == ETipoSolicitud.adelanto){
            const { fechaFin, fechaInicio } = this.solicitud;

            this.fechaInicio = fechaInicio;
            this.fechaFin = fechaFin;

            this.fechaInicio.setDate(this.fechaInicio.getDate() - 3);
            this.fechaFin.setDate(this.fechaFin.getDate() - 3);
        }
    }

    async modificaFechas(): Promise<void> {
        if (this.fechaFin && this.fechaInicio) {
            this.solicitud = { 
                ...this.solicitud,
                fechaInicio: this.fechaInicio,
                fechaFin: this.fechaFin
            }            
        }
    }
}