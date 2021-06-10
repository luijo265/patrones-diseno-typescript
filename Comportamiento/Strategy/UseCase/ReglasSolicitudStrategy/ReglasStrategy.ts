import { IReglaSolicitud, ReglaSolicitud } from "../../Domain/DTO/ReglaSolicitud";
import { ISolicitud } from "../../Domain/Models/Solicitud";

export interface IReglasSolicitudStrategy {
    getCumpleRegla(solicitud: ISolicitud): IReglaSolicitud;
}

export interface IReglasSolicitudControlStrategy extends IReglasSolicitudStrategy {
    setReglasSolicitud(reglaSolicitud: IReglasSolicitudStrategy): void;
}

export class ReglasSolicitudStrategy implements IReglasSolicitudControlStrategy{

    private reglaSolicitudStrategy?: IReglasSolicitudStrategy;

    public getCumpleRegla = (solicitud: ISolicitud) => 
        this.reglaSolicitudStrategy 
        ? this.reglaSolicitudStrategy.getCumpleRegla(solicitud)
        : new ReglaSolicitud()

    setReglasSolicitud = (reglaSolicitudStrategy: IReglasSolicitudStrategy) => 
        this.reglaSolicitudStrategy = reglaSolicitudStrategy

}