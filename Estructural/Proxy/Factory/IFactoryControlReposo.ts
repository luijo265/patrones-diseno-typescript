import { IControlReposo } from "../ControlReposo/IControlReposo";

export interface IFactoryControlReposo {

    getInstance(): IControlReposo;

}