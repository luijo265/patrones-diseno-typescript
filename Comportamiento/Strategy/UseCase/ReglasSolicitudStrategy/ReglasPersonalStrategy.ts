import { IReglaSolicitud, ReglaSolicitud } from "../../Domain/DTO/ReglaSolicitud";
import { ETipoSolicitud, ISolicitud } from "../../Domain/Models/Solicitud";
import { IReglasSolicitudStrategy } from "./ReglasStrategy";

export class ReglasPersonalStrategy implements IReglasSolicitudStrategy {

    getCumpleRegla = (solicitud: ISolicitud) => (solicitud.tipo != ETipoSolicitud.personal)
            ? new ReglaSolicitud()
            : this.cumpleRegla(solicitud);

    private cumpleRegla(solicitud: ISolicitud): IReglaSolicitud {
        const reglaSolicitud = new ReglaSolicitud();

        reglaSolicitud.tieneRegla = true
        reglaSolicitud.cumpleRegla = [solicitud].filter(this.isUnSoloParticipante)
            .filter(this.isMayorDeEdad)
            .filter(this.isMinimoDiasAtencion)
            .length > 0;
        return reglaSolicitud;
    }

    private isUnSoloParticipante = (solicitud: ISolicitud) => 
        solicitud.participantes.length == 1

    private isMayorDeEdad = (solicitud: ISolicitud) =>
        solicitud.participantes[0].edad > 18
    
    private isMinimoDiasAtencion = (solicitud: ISolicitud) =>
        solicitud.dias >= 3

}