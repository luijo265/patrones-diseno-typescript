import { SnakeDecorator } from "./decorator/SnakeDecorator";
import { Cursos } from "./models/Cursos";

let curso = new Cursos("Laraval", 12, "PHP");

console.log("curso no decorado", curso.toJson());

let cursoDecorado = new SnakeDecorator(curso);

console.log("curso decorado", cursoDecorado.toJson());