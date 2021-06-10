import { IReglaSolicitud, ReglaSolicitud } from "../../Domain/DTO/ReglaSolicitud";
import { ETipoSolicitud, ISolicitud } from "../../Domain/Models/Solicitud";
import { IReglasSolicitudStrategy } from "./ReglasStrategy";

export class ReglasGrupalStrategy implements IReglasSolicitudStrategy {

    getCumpleRegla = (solicitud: ISolicitud) => (solicitud.tipo != ETipoSolicitud.grupal)
        ? new ReglaSolicitud()
        : this.cumpleRegla(solicitud);

    private cumpleRegla(solicitud: ISolicitud): IReglaSolicitud {
        const reglaSolicitud = new ReglaSolicitud();
        reglaSolicitud.tieneRegla = true
        reglaSolicitud.cumpleRegla = [solicitud].filter(this.isMinimoParticipantes)
            .filter(this.isMinimoDiasAtencion)
            .length > 0;
        return reglaSolicitud;
    }

    private isMinimoParticipantes = (solicitud: ISolicitud) => 
        solicitud.participantes.length >= 4
    
    private isMinimoDiasAtencion = (solicitud: ISolicitud) =>
        solicitud.dias >= 7

}