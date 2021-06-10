import { ETipoEvento, IEventoIncapacidad, IExpediente } from "../../../Domain/Expediente";
import { EventoIncapacidad } from "../../../Domain/Models/ExpedienteModels";
import { diferenciaDias } from "../../../Utils/DateUtils";
import { FiltrarExpedienteException } from "../../Exception/FiltrarExpedienteException";
import { AbstractFiltrarExpediente } from "../AbstractFiltrarExpediente";

export class MinimoDiasValidate extends AbstractFiltrarExpediente {

    private readonly MINIMO_DIAS = 3;
    private incapacidad: IEventoIncapacidad = incapacidadInit();

    public validate(expediente: IExpediente){
        if (this.setIncapacidad(expediente) && diferenciaDias(this.fechaInicio, this.fechaFin) < this.MINIMO_DIAS)
            throw new FiltrarExpedienteException("No cumple mínima cantidad de días")
    }
    
    private setIncapacidad = (expediente: IExpediente) => 
        this.incapacidad = <EventoIncapacidad> expediente.evento;

    private get fechaInicio() {
        return this.incapacidad?.fechaInicio;
    }

    private get fechaFin() {
        return this.incapacidad?.fechaFin;
    }
}

function incapacidadInit(): IEventoIncapacidad {
    return { 
        fechaApertura: new Date(),
        tipo: ETipoEvento.incapacidad,
        fechaInicio: new Date(), 
        fechaFin: new Date(), 
        diagnostico: '' 
    };
}