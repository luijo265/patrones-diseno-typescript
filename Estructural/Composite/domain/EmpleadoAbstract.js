"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoAbstract = void 0;
var EmpleadoAbstract = /** @class */ (function () {
    function EmpleadoAbstract(nombre, area) {
        this._area = area;
        this._nombre = nombre;
    }
    Object.defineProperty(EmpleadoAbstract.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmpleadoAbstract.prototype, "area", {
        get: function () {
            return this._area;
        },
        set: function (area) {
            this._area = area;
        },
        enumerable: false,
        configurable: true
    });
    EmpleadoAbstract.prototype.getCantidad = function () {
        return 1;
    };
    EmpleadoAbstract.prototype.getCantidadExcluido = function () {
        return 0;
    };
    return EmpleadoAbstract;
}());
exports.EmpleadoAbstract = EmpleadoAbstract;
