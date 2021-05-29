import { ETipoSolicitud, ISolicitud } from "../../Domain/Solicitud/SolicitudDefinitions";
import { ModificarFechaAbstract } from "./ModificarFechaAbstract";

export class CambiarTipoSolicitudService extends ModificarFechaAbstract {

    private nuevoTipo?: any;

    async execute(): Promise<void> {
        this.verificaTipoSolicitud();
        this.cambiarTipo();
    }

    verificaTipoSolicitud(): void {
        if (this.solicitud.tipo == ETipoSolicitud.cambiartipo){
            this.nuevoTipo = ETipoSolicitud.adelanto;
        }
    }

    cambiarTipo():void {
        if (this.nuevoTipo)
            this.solicitud.tipo = <ETipoSolicitud>this.nuevoTipo;
    }

    async modificaFechas(): Promise<void> { console.log("nada") }
}