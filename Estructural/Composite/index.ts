import { Empleado } from "./domain/Empleado";
import { EmpleadoComposite } from "./domain/EmpleadoComposite";

const luis:Empleado = new Empleado('Luis', 'Desarrollo');
const marisol: Empleado = new Empleado('Marisol', 'Desarrollo');
const daniel: Empleado = new Empleado('Daniel', 'Marketing');

const dayana: EmpleadoComposite = new EmpleadoComposite('Dayana', 'Desarrollo');
const oswaldo: EmpleadoComposite = new EmpleadoComposite('Oswaldo', 'Presidencia');

dayana.addEmpleado(luis);
dayana.addEmpleado(marisol);

oswaldo.addEmpleado(daniel);
oswaldo.addEmpleado(dayana);

console.log("Cantidad de empleados en presidencia", oswaldo.getCantidad())
console.log("Cantidad de empleados en desarrollo", dayana.getCantidad())
console.log("Cantidad de empleados en marketing", daniel.getCantidad())