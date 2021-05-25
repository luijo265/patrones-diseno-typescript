import { estudiantes } from "../Domain/Estudiantes";
import { ICommand } from "./CommandDefinitions";

export class AprobadoCommand implements ICommand {

    static getName(): string{
        return "APROBADOS"
    }

    execute(...args: string[]): void {
        estudiantes
            .filter(estudiante => estudiante.promedio >= 5)
            .forEach(estudiante => console.log(`Felicitaciones ${estudiante.nombre} tiene buen promedio`))        
    }

}