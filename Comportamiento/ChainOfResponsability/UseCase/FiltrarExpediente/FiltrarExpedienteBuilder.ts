import { IExpediente } from "../../Domain/Expediente";
import { IFiltrarExpediente } from "../Definitions/FiltrarExpediente";
import { AbstractFiltrarExpediente } from "./AbstractFiltrarExpediente";
import { IncapacidadFiltratExpediente } from "./Incapacidad/IncapacidadFiltratExpediente";

export class FiltrarExpedienteBuilder extends AbstractFiltrarExpediente{

    validate(expediente: IExpediente){
        for (const validator of this.handlers) {
            validator.validate(expediente)
        }
    }

    public static builder(): IFiltrarExpediente{
        const filtrarExpediente = new FiltrarExpedienteBuilder();
        filtrarExpediente.addValidate(new IncapacidadFiltratExpediente());
        return filtrarExpediente;
    }
}