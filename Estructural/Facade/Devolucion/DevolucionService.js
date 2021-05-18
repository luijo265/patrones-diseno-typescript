"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevolucionService = void 0;
var ETipoTransaccion_1 = require("../ProcesosPago/ETipoTransaccion");
var ProcesosPagoService_1 = require("../ProcesosPago/ProcesosPagoService");
var DevolucionService = /** @class */ (function () {
    function DevolucionService() {
        this.procesoPagoService = new ProcesosPagoService_1.ProcesosPagoService();
    }
    DevolucionService.prototype.devuelvePorDefectuoso = function (cantidad, usuario, producto) {
        this.procesarPago('empresa', usuario, cantidad, ETipoTransaccion_1.ETipoTransaccion.egreso);
        console.log('Devolucion de dinero por producto defectuoso');
    };
    DevolucionService.prototype.procesarPago = function (origen, destino, cantidad, tipo) {
        this.procesoPagoService.procesarPago(origen, destino, cantidad, tipo);
    };
    return DevolucionService;
}());
exports.DevolucionService = DevolucionService;
