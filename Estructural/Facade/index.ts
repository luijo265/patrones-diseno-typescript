import { CompraService } from "./Compra/CompraService";
import { DemandaService } from "./Demanda/DemandaService";
import { DevolucionService } from "./Devolucion/DevolucionService";

const compraService = new CompraService();
const devolucionService = new DevolucionService();
const demandaService = new DemandaService();
const producto = "Air Fryer";
const precioProducto = 200.0;
const usuario = "Luis";

console.log("Luis viene y compra un producto");
compraService.compraProducto(precioProducto, usuario, producto);

console.log("Resulta que Luis contento va prueba su freidora y no funciona");
console.log("Lo lleva a garantía varias veces, porque sigue sin funcionar bien");
console.log("Luis se frustra y decide que le devuelvan su dinero");
devolucionService.devuelvePorDefectuoso(precioProducto, usuario, producto);

console.log("A Luis se le enferma de gravedad un familiar y determina que fue por la freidora");
console.log("El demanda y gana, por lo que la empresa le debe pagar");
demandaService.clienteGanaDemanda(50000.0, usuario, producto);
