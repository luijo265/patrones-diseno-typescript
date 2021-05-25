export interface IEmployee {
    nombre: string;
    cargo: string;
    subordinados: IEmployee[];
}

export const findIndexEmployee = (employeeArr: IEmployee, employeeFind: IEmployee) => {
    return (employeeArr.nombre == employeeFind.nombre)
        && (employeeArr.cargo == employeeFind.cargo)
        && (employeeArr.subordinados.length == employeeFind.subordinados.length);
}