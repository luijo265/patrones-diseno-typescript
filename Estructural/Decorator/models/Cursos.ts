import { IDataObject } from "../interfaces/IDataObject";

export class Cursos implements IDataObject{

    private _name:string;
    private _hourEstimated:number;
    private _classParent: string;

    constructor(name:string, hourEstimated:number, classParent:string){
        this._name = name;
        this._hourEstimated = hourEstimated;
        this._classParent = classParent;
    }

    public toJson(): Object {
        return {
            name: this._name,
            hourEstimated: this._hourEstimated,
            classParent: this._classParent,
        }
    }

}