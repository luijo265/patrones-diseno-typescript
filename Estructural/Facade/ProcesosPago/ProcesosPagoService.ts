import { ETipoTransaccion } from "./ETipoTransaccion";
import { IProcesosPago } from "./IProcesosPago";

export class ProcesosPagoService implements IProcesosPago {

    public procesarPago(origen: string, destino: string, cantidad: number, tipo: ETipoTransaccion): void {

        this.procesarPagoSAP(origen, destino, cantidad, tipo);
        this.procesarPagoInterno(cantidad, tipo);

    }

    private procesarPagoSAP(origen: string, destino: string, cantidad: number, tipo: ETipoTransaccion){

        if (ETipoTransaccion.egreso == tipo) {
            console.log(`Se descuenta ${cantidad} de ${origen} a ${destino}`);
        } else if (ETipoTransaccion.egresoGrave == tipo){
            console.log(`Se descuenta ${cantidad} de ${origen} a ${destino}`);
            console.log('Se comunica a Administración');
            console.log('Se comunica a Tesorería');
            console.log('Se comunica a Presidencia');
        }else{
            console.log(`Se abona ${cantidad} de ${origen} a ${destino}`);
        }

    }
    
    private procesarPagoInterno(cantidad: number, tipo: ETipoTransaccion){

        if (ETipoTransaccion.ingreso == tipo) {
            console.log(`Se abona ${cantidad} a empresa`);
            console.log('Se cálcula puntos clientes');
            console.log('Se ajusta historial de clientes');
        }

    }


}