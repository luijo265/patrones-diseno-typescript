import { ETipoTransaccion } from "../ProcesosPago/ETipoTransaccion";
import { ProcesosPagoService } from "../ProcesosPago/ProcesosPagoService";

export class CompraService {
    private readonly procesoPagoService: ProcesosPagoService;

    constructor() {
        this.procesoPagoService = new ProcesosPagoService();
    }

    public compraProducto(cantidad: number, usuario: string, producto: string) {

        this.procesarPago(usuario, 'empresa', cantidad, ETipoTransaccion.ingreso);
        console.log('Se vende producto exitosamente!');

    }

    private procesarPago(origen: string, destino: string, cantidad: number, tipo: ETipoTransaccion) {
        this.procesoPagoService.procesarPago(origen, destino, cantidad, tipo);
    }
}