import { ETipoTransaccion } from "./ETipoTransaccion";

export interface IProcesosPago {

    procesarPago(origen: string, destino: string, cantidad: number, tipo: ETipoTransaccion): void;

}