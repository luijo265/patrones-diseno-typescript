import { ETipoTransaccion } from "../ProcesosPago/ETipoTransaccion";
import { ProcesosPagoService } from "../ProcesosPago/ProcesosPagoService";

export class DevolucionService {

    private readonly procesoPagoService: ProcesosPagoService;

    constructor(){
        this.procesoPagoService = new ProcesosPagoService();
    }

    public devuelvePorDefectuoso(cantidad: number, usuario: string, producto:string) {

        this.procesarPago('empresa', usuario, cantidad, ETipoTransaccion.egreso);
        console.log('Devolucion de dinero por producto defectuoso');

    }

    private procesarPago(origen: string, destino: string, cantidad: number, tipo: ETipoTransaccion){
        this.procesoPagoService.procesarPago(origen, destino, cantidad, tipo);
    }

}