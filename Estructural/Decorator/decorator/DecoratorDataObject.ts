import { IDataObject } from "../interfaces/IDataObject";

export abstract class DecoratorDataObject implements IDataObject {

    protected dataObject:IDataObject;

    constructor(dataObject:IDataObject){
        this.dataObject = dataObject;
    }

    public toJson(): Object {
        return this.dataObject.toJson();
    }

}