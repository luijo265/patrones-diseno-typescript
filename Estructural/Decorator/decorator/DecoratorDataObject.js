"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorDataObject = void 0;
class DecoratorDataObject {
    constructor(dataObject) {
        this.dataObject = dataObject;
    }
    toJson() {
        return this.dataObject.toJson();
    }
}
exports.DecoratorDataObject = DecoratorDataObject;
