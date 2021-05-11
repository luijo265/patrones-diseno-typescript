import { toSnake } from "snake-camel";
import { IDataObject } from "../interfaces/IDataObject";
import { DecoratorDataObject } from "./DecoratorDataObject";

export class SnakeDecorator extends DecoratorDataObject {

    constructor(dataObject: IDataObject){
        super(dataObject);
    }

    public toJson():Object {
        let data = this.dataObject.toJson();
        return this.convertToSnake(data);
    }

    private convertToSnake(data: Object): Object {
        return toSnake(data);
    }

}