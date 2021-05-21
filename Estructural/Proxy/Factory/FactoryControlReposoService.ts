import { ControlReposoProxy } from "../ControlReposo/ControlReposoProxy";
import { ControlReposoService } from "../ControlReposo/ControlReposoService";
import { IControlReposo } from "../ControlReposo/IControlReposo";
import { IFactoryControlReposo } from "./IFactoryControlReposo";

export class FactoryControlReposoService implements IFactoryControlReposo {

    public getInstance(): IControlReposo {
        // return new ControlReposoService();
        return new ControlReposoProxy();
    }

}