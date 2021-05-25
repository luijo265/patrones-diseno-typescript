import { estudiantes } from "../Domain/Estudiantes";
import { ICommand } from "./CommandDefinitions";

export class GraduadoCommand implements ICommand {

    static getName(): string{
        return "GRADUADOS"
    }

    execute = (...args: string[]) => 
        estudiantes
            .filter(estudiante => estudiante.semestre > 8)
            .forEach(estudiante => console.log(`${estudiante.nombre} felicitaciones cerca de cumplir su meta`));

}