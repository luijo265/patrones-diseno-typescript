"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnakeDecorator = void 0;
const snake_camel_1 = require("snake-camel");
const DecoratorDataObject_1 = require("./DecoratorDataObject");
class SnakeDecorator extends DecoratorDataObject_1.DecoratorDataObject {
    constructor(dataObject) {
        super(dataObject);
    }
    toJson() {
        let data = this.dataObject.toJson();
        return this.convertToSnake(data);
    }
    convertToSnake(data) {
        return snake_camel_1.toSnake(data);
    }
}
exports.SnakeDecorator = SnakeDecorator;
