import { EmpleadoAbstract } from "./EmpleadoAbstract";

export class EmpleadoComposite extends EmpleadoAbstract {

    private _empleados:EmpleadoAbstract[];

    constructor(nombre:string, area:string){
        super(nombre, area);
        this._empleados = [];
    }

    public getCantidad(){
        let cantidad = 1;
        this._empleados.forEach(empleado => {
            cantidad += empleado.getCantidad();
        });
        return cantidad;
    }

    public addEmpleado(empleado:EmpleadoAbstract){
        this._empleados.push(empleado);
    }

}