export abstract class EmpleadoAbstract {

    protected _nombre:string;
    protected _area:string

    constructor(nombre:string, area:string){
        this._area = area;
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre:string){
        this._nombre = nombre;
    }

    get area() {
        return this._area;
    }

    set area(area: string) {
        this._area = area;
    }

    public getCantidad(){
        return 1;
    }

    public getCantidadExcluido() {
        return 0;
    }

}