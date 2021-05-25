import { IContainer } from "../Iterator/Definitions";
import { findIndexEmployee, IEmployee } from "./EmployeeInterface";
import { EmployeeIterator } from "./EmployeeIterator";

export class Employee implements IEmployee, IContainer<IEmployee> {

    private _nombre: string;
    private _cargo: string;
    private _subordinados: IEmployee[];

    constructor(nombre: string, cargo:string, subordinados: IEmployee[]){
        this._cargo = cargo;
        this._nombre = nombre;
        this._subordinados = subordinados;
    }

    public createIterator() {
        return new EmployeeIterator(this);
    }

    get cargo(){
        return this._cargo;
    }
    get nombre(){
        return this._nombre;
    }
    get subordinados(){
        return this._subordinados;
    }

    set cargo(cargo:string) {
        this._cargo = cargo;
    }
    set nombre(nombre:string) {
        this._nombre = nombre;
    }

    addSubordinado(employee: IEmployee){
        this._subordinados.push(employee);
    }

    removeSubordinado(employee: IEmployee){
        const find = (employeeSub:IEmployee) => {
            return findIndexEmployee(employeeSub, employee);
        }
        this._subordinados.splice( this._subordinados.findIndex(find), 1 );
    }

}