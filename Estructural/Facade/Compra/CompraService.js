"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompraService = void 0;
var ETipoTransaccion_1 = require("../ProcesosPago/ETipoTransaccion");
var ProcesosPagoService_1 = require("../ProcesosPago/ProcesosPagoService");
var CompraService = /** @class */ (function () {
    function CompraService() {
        this.procesoPagoService = new ProcesosPagoService_1.ProcesosPagoService();
    }
    CompraService.prototype.compraProducto = function (cantidad, usuario, producto) {
        this.procesarPago(usuario, 'empresa', cantidad, ETipoTransaccion_1.ETipoTransaccion.ingreso);
        console.log('Se vende producto exitosamente!');
    };
    CompraService.prototype.procesarPago = function (origen, destino, cantidad, tipo) {
        this.procesoPagoService.procesarPago(origen, destino, cantidad, tipo);
    };
    return CompraService;
}());
exports.CompraService = CompraService;
