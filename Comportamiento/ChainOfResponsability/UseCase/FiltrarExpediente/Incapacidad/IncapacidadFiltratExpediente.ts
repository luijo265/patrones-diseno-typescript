import { IEventoIncapacidad, IExpediente } from "../../../Domain/Expediente";
import { EventoIncapacidad } from "../../../Domain/Models/ExpedienteModels";
import { AbstractFiltrarExpediente } from "../AbstractFiltrarExpediente";
import { MaximoCapitalReservaValidate } from "./MaximoCapitalReservaValidate";
import { MinimoDiasValidate } from "./MinimoDiasValidate";

export class IncapacidadFiltratExpediente extends AbstractFiltrarExpediente {

    constructor(){
        super();
        this.addValidate(new MaximoCapitalReservaValidate());
        this.addValidate(new MinimoDiasValidate())
    }

    public validate(expediente: IExpediente){
        if (expediente.evento instanceof EventoIncapacidad) {
            for (const validator of this.handlers) {
                validator.validate(expediente);
            }
        }
    }

}