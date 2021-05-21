import { ISolicitud } from "../Domain/ISolicitud";
import { IControlReposo } from "./IControlReposo";

export class ControlReposoService implements IControlReposo {

    public guardarReposoNoRegla(solicitud: ISolicitud): void{
        console.log(`Se guarda en DB por tipo ${solicitud.tipo}\n`)
    }

    public obtenerReposoNoRegla(solicitud: ISolicitud): ISolicitud{
        console.log(`Se consulta en DB por tipo ${solicitud.tipo}\n`)
        return {
            fechaInicio: new Date("2020-01-10"),
            fechaFin: new Date("2020-01-20"),
            paciente: solicitud.paciente,
            asesor:"Juanito",
            sede:"Sede Este",
            tipo: solicitud.tipo,
        }
    }

}