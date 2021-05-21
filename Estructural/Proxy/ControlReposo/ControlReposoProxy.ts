import { ISolicitud } from "../Domain/ISolicitud";
import { ControlReposoService } from "./ControlReposoService";
import { IControlReposo } from "./IControlReposo";

export class ControlReposoProxy implements IControlReposo {

    private controlReposoService: IControlReposo;

    constructor(){
        this.controlReposoService = new ControlReposoService();
    }

    guardarReposoNoRegla(solicitud: ISolicitud): void {
        this.controlReposoService.guardarReposoNoRegla(solicitud);
    }
    
    obtenerReposoNoRegla(solicitud: ISolicitud): ISolicitud {
        console.log(`Guardamos en el historial ${solicitud.sede} con el asesor ${solicitud.asesor} a la solicitud`, solicitud);
        return this.controlReposoService.obtenerReposoNoRegla(solicitud);
    }

}