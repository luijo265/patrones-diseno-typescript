export interface ICommand {
    execute(...args:string[]): void;
}

export interface ICommandManager {
    getCommand(command:string):ICommand;
    registerCommand(command: string, getInstance: Function): void;
}

export interface InstanceCommand {
    ():ICommand;
}

export type CommandMap = {
    [key: string]: InstanceCommand;
}
