"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SnakeDecorator_1 = require("./decorator/SnakeDecorator");
const Cursos_1 = require("./models/Cursos");
let curso = new Cursos_1.Cursos("Laraval", 12, "PHP");
console.log("curso no decorado", curso.toJson());
let cursoDecorado = new SnakeDecorator_1.SnakeDecorator(curso);
console.log("curso decorado", cursoDecorado.toJson());
