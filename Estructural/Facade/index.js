"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompraService_1 = require("./Compra/CompraService");
var DemandaService_1 = require("./Demanda/DemandaService");
var DevolucionService_1 = require("./Devolucion/DevolucionService");
var compraService = new CompraService_1.CompraService();
var devolucionService = new DevolucionService_1.DevolucionService();
var demandaService = new DemandaService_1.DemandaService();
var producto = "Air Fryer";
var precioProducto = 200.0;
var usuario = "Luis";
console.log("Luis viene y compra un producto");
compraService.compraProducto(precioProducto, usuario, producto);
console.log("Resulta que Luis contento va prueba su freidora y no funciona");
console.log("Lo lleva a garantía varias veces, porque sigue sin funcionar bien");
console.log("Luis se frustra y decide que le devuelvan su dinero");
devolucionService.devuelvePorDefectuoso(precioProducto, usuario, producto);
console.log("A Luis se le enferma de gravedad un familiar y determina que fue por la freidora");
console.log("El demanda y gana, por lo que la empresa le debe pagar");
demandaService.clienteGanaDemanda(50000.0, usuario, producto);
