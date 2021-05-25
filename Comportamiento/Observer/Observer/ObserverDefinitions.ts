import { IIdioma } from "../ControlIdioma/ControlIdiomaDefinitions";

export interface IObserver {
    getName():string;
    notify(idioma: IIdioma):void;
}

export interface IObservable {
    notifyAll(): void;
    addObserser(observer:IObserver): void;
    removeObserser(observer:IObserver): void;
}

export type TObservers = {
    [name:string]: IObserver;
}