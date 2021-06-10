import { IExpediente } from "../../../Domain/Expediente";
import { FiltrarExpedienteException } from "../../Exception/FiltrarExpedienteException";
import { AbstractFiltrarExpediente } from "../AbstractFiltrarExpediente";

export class MaximoCapitalReservaValidate extends AbstractFiltrarExpediente {

    private readonly MAXIMO_MULTIPLO_CAPITAL = 3;

    public validate(expediente: IExpediente){
        if((expediente.reserva.capital * this.MAXIMO_MULTIPLO_CAPITAL) < expediente.reserva.reserva)
            throw new FiltrarExpedienteException("Reserva supera el capital")
    }
            

}