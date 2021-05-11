"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cursos = void 0;
class Cursos {
    constructor(name, hourEstimated, classParent) {
        this._name = name;
        this._hourEstimated = hourEstimated;
        this._classParent = classParent;
    }
    toJson() {
        return {
            name: this._name,
            hourEstimated: this._hourEstimated,
            classParent: this._classParent,
        };
    }
}
exports.Cursos = Cursos;
