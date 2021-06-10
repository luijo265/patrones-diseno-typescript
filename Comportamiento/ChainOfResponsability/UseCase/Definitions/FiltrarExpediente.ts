import { IExpediente } from "../../Domain/Expediente";
import { FiltrarExpedienteException } from "../Exception/FiltrarExpedienteException";

export interface IFiltrarExpediente {
    validate(expediente: IExpediente): void | FiltrarExpedienteException;
    addValidate(filtrarExpediente: IFiltrarExpediente): void;
}