import { IControlReposo } from "./ControlReposo/IControlReposo";
import { ISolicitud } from "./Domain/ISolicitud";
import { FactoryControlReposoService } from "./Factory/FactoryControlReposoService";
import { IFactoryControlReposo } from "./Factory/IFactoryControlReposo";

const factory: IFactoryControlReposo = new FactoryControlReposoService();
const controlReposo: IControlReposo = factory.getInstance();
const solicitud: ISolicitud = {
    fechaInicio: new Date("2020-01-21"),
    fechaFin: new Date("2020-01-30"),
    paciente: "Luis",
    asesor: "Andres",
    sede: "Sede Oeste",
    tipo: "Desgarre Muscular",
}

console.log('Se hace la solicitud', solicitud);
console.log('Ya tiene reposo que no cumplio regla, entonces la obtiene');
const solicitudGuardada = controlReposo.obtenerReposoNoRegla(solicitud);

solicitud.fechaInicio = solicitudGuardada.fechaInicio;
console.log('Se modifica solicitud', solicitud);

console.log('La solicitud no cumple, se procede a guardar');
controlReposo.guardarReposoNoRegla(solicitud);