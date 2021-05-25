import { AprobadoCommand } from "./AprobadoCommand";
import { CommandMap, ICommand, ICommandManager, InstanceCommand } from "./CommandDefinitions";
import { GraduadoCommand } from "./GraduadoCommand";
import { ReprobadoCommand } from "./ReprobadoCommand";

export class CommandManager implements ICommandManager {

    private commands: CommandMap = {};

    private constructor(){
        this.registerCommand(AprobadoCommand.getName(), () => new AprobadoCommand())
        this.registerCommand(ReprobadoCommand.getName(), () => new ReprobadoCommand())
        this.registerCommand(GraduadoCommand.getName(), () => new GraduadoCommand())
    }

    public registerCommand(command: string, getInstance: InstanceCommand): void{
        this.commands[command] = getInstance;
    }

    public getCommand(command: string): ICommand {
        const commandUpper = command.toUpperCase();
        if (this.commands[commandUpper] == null || this.commands[commandUpper] == undefined){
            throw new Error("Sin command");
        }
        return this.commands[commandUpper]();
    }
    public static getInstance(): ICommandManager{
        return new CommandManager();
    }
}