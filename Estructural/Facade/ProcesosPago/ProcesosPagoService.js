"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcesosPagoService = void 0;
var ETipoTransaccion_1 = require("./ETipoTransaccion");
var ProcesosPagoService = /** @class */ (function () {
    function ProcesosPagoService() {
    }
    ProcesosPagoService.prototype.procesarPago = function (origen, destino, cantidad, tipo) {
        this.procesarPagoSAP(origen, destino, cantidad, tipo);
        this.procesarPagoInterno(cantidad, tipo);
    };
    ProcesosPagoService.prototype.procesarPagoSAP = function (origen, destino, cantidad, tipo) {
        if (ETipoTransaccion_1.ETipoTransaccion.egreso == tipo) {
            console.log("Se descuenta " + cantidad + " de " + origen + " a " + destino);
        }
        else if (ETipoTransaccion_1.ETipoTransaccion.egresoGrave == tipo) {
            console.log("Se descuenta " + cantidad + " de " + origen + " a " + destino);
            console.log('Se comunica a Administración');
            console.log('Se comunica a Tesorería');
            console.log('Se comunica a Presidencia');
        }
        else {
            console.log("Se abona " + cantidad + " de " + origen + " a " + destino);
        }
    };
    ProcesosPagoService.prototype.procesarPagoInterno = function (cantidad, tipo) {
        if (ETipoTransaccion_1.ETipoTransaccion.ingreso == tipo) {
            console.log("Se abona " + cantidad + " a empresa");
            console.log('Se cálcula puntos clientes');
            console.log('Se ajusta historial de clientes');
        }
    };
    return ProcesosPagoService;
}());
exports.ProcesosPagoService = ProcesosPagoService;
