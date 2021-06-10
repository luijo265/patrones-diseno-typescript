import { IExpediente } from "../../Domain/Expediente";
import { IFiltrarExpediente } from "../Definitions/FiltrarExpediente";
import { FiltrarExpedienteException } from "../Exception/FiltrarExpedienteException";

export abstract class AbstractFiltrarExpediente implements IFiltrarExpediente {

    protected handlers: IFiltrarExpediente[] = [];

    abstract validate(expediente: IExpediente): void | FiltrarExpedienteException;

    public addValidate(filtrarExpediente: IFiltrarExpediente) {
        this.handlers.push(filtrarExpediente);
    }

}