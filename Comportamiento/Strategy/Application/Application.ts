import { IReglaSolicitud, ReglaSolicitud } from "../Domain/DTO/ReglaSolicitud";
import { ISolicitud } from "../Domain/Models/Solicitud";
import { ReglasGrupalStrategy } from "../UseCase/ReglasSolicitudStrategy/ReglasGrupalStrategy";
import { ReglasPersonalStrategy } from "../UseCase/ReglasSolicitudStrategy/ReglasPersonalStrategy";
import { IReglasSolicitudControlStrategy, ReglasSolicitudStrategy } from "../UseCase/ReglasSolicitudStrategy/ReglasStrategy";

export class ApplicationStrategy {

    private reglasSolicitud: IReglasSolicitudControlStrategy

    constructor() {
        this.reglasSolicitud = new ReglasSolicitudStrategy()
    }

    execute(solicitud: ISolicitud){

        console.log("Verificando reglas de solicitud")
        console.log("Sin estrategia definida")
        let reglaSolicitud:IReglaSolicitud = this.reglasSolicitud.getCumpleRegla(solicitud);
        
        this.hasReglas(reglaSolicitud);
        
        console.log("Se define estrategia ReglasGrupalStrategy")
        this.reglasSolicitud.setReglasSolicitud(new ReglasGrupalStrategy())
        reglaSolicitud = this.reglasSolicitud.getCumpleRegla(solicitud);
        this.hasReglas(reglaSolicitud);
        
        console.log("Se define estrategia ReglasPersonalStrategy")
        this.reglasSolicitud.setReglasSolicitud(new ReglasPersonalStrategy())
        reglaSolicitud = this.reglasSolicitud.getCumpleRegla(solicitud);
        this.hasReglas(reglaSolicitud);
        
    }

    private hasReglas(reglaSolicitud: IReglaSolicitud):boolean {
        if (!reglaSolicitud.tieneRegla){
            console.log("No se ajusta a estas reglas")
            return false
        }
        console.log("Si tiene regla")
        if (!reglaSolicitud.cumpleRegla) {
            console.log("No cumple a estas reglas")
            return false
        }
        console.log("Si cumple estas reglas")
        return true
    }

}