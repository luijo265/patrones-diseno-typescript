import { estudiantes } from "../Domain/Estudiantes";
import { ICommand } from "./CommandDefinitions";

export class ReprobadoCommand implements ICommand {

    static getName(): string{
        return "REPROBADOS"
    }

    execute(...args: string[]): void {
        estudiantes
            .filter(estudiante => estudiante.promedio < 5)
            .forEach(estudiante => console.log(`${estudiante.nombre} es necesario mejorar`))        
    }

}