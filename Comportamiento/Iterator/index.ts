import { Employee } from "./Employee/Employee"
import { IEmployee } from "./Employee/EmployeeInterface";
import { IIterator } from "./Iterator/Definitions";

const adm1 = new Employee("Armando", "Administracion Empleado", []);
const adm2 = new Employee("Pamela", "Administracion Empleado", []);
const administracion = new Employee("Casandra", "Administracion Jefe", [adm1, adm2]);

const tecnologia = new Employee("Mauricio", "Tecnologia Jefe", []);
const seo = new Employee("Luis", "SEO", [administracion, tecnologia]);

const iterator: IIterator<IEmployee> = seo.createIterator();

let orden:number = 1;
console.log('Listado de empleados');
while (iterator.hasNext()) {
    const emp:IEmployee = iterator.next();
    console.log(`${orden}: ${emp.nombre} con cargo ${emp.cargo}`);
    orden++;
}
