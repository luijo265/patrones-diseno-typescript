import { IIterator } from "../Iterator/Definitions";
import { IEmployee } from "./EmployeeInterface";

export class EmployeeIterator implements IIterator<IEmployee> {

    private list: IEmployee[];
    private index: number;

    constructor(employeeHead: IEmployee){
        this.index = 0;
        this.list = [];
        this.addRecursive(employeeHead);
    }

    private addRecursive(employee: IEmployee): void {
        this.list.push(employee);
        if (employee.subordinados.length > 0) {
            for (const emp of employee.subordinados) {
                this.addRecursive(emp);
            }
        }
    }

    public hasNext(): boolean {
        return (this.list.length == 0)
            ? false
            : (this.index < this.list.length);
    }

    public next(): IEmployee {
        if (!this.hasNext())
            throw new Error("No hay más elementos")
        else 
            return this.list[this.index++];
    }

}