import { ETipoTransaccion } from "../ProcesosPago/ETipoTransaccion";
import { ProcesosPagoService } from "../ProcesosPago/ProcesosPagoService";

export class DemandaService {

    private readonly procesoPagoService: ProcesosPagoService;

    constructor(){
        this.procesoPagoService = new ProcesosPagoService();
    }
    
    public clienteGanaDemanda(cantidad: number, usuario: string, producto:string) {

        this.procesarPago('empresa', usuario, cantidad, ETipoTransaccion.egresoGrave);
        console.log('Se paga cliente por ganar una demanda a la empresa');

    }

    private procesarPago(origen: string, destino: string, cantidad: number, tipo: ETipoTransaccion){
        this.procesoPagoService.procesarPago(origen, destino, cantidad, tipo);
    }

}