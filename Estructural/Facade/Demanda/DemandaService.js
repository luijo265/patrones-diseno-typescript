"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemandaService = void 0;
var ETipoTransaccion_1 = require("../ProcesosPago/ETipoTransaccion");
var ProcesosPagoService_1 = require("../ProcesosPago/ProcesosPagoService");
var DemandaService = /** @class */ (function () {
    function DemandaService() {
        this.procesoPagoService = new ProcesosPagoService_1.ProcesosPagoService();
    }
    DemandaService.prototype.clienteGanaDemanda = function (cantidad, usuario, producto) {
        this.procesarPago('empresa', usuario, cantidad, ETipoTransaccion_1.ETipoTransaccion.egresoGrave);
        console.log('Se paga cliente por ganar una demanda a la empresa');
    };
    DemandaService.prototype.procesarPago = function (origen, destino, cantidad, tipo) {
        this.procesoPagoService.procesarPago(origen, destino, cantidad, tipo);
    };
    return DemandaService;
}());
exports.DemandaService = DemandaService;
