import { ICommand, ICommandManager } from "./Command/CommandDefinitions";
import { CommandManager } from "./Command/CommandManager";

const commandInstance: ICommandManager = CommandManager.getInstance();

console.log("avisando a los aprobados");
let command: ICommand = commandInstance.getCommand("APROBADOS");
command.execute();
console.log("avisando a los reprobados");
command = commandInstance.getCommand("REPROBADOs");
command.execute();
console.log("avisando a los graduados");
command = commandInstance.getCommand("graduados");
command.execute();