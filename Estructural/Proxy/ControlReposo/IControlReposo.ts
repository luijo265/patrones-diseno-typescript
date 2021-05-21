import { ISolicitud } from "../Domain/ISolicitud";

export interface IControlReposo {
    guardarReposoNoRegla(solicitud: ISolicitud): void;
    obtenerReposoNoRegla(solicitud: ISolicitud): ISolicitud;
}