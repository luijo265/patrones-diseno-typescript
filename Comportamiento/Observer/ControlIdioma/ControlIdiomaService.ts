import { IObservable, IObserver, TObservers } from "../Observer/ObserverDefinitions";
import { EIdioma } from "../Traduccion/TraduccionDefinitions";
import { IdiomaDto } from "./IdiomaDto";

export class ControlIdiomaService implements IObservable {

    private observers:TObservers;
    private idiomaDto: IdiomaDto;

    constructor(idiomaDto: IdiomaDto){
        this.observers = {};
        this.idiomaDto = idiomaDto;
    }

    getIdioma() {
        return this.idiomaDto.idioma;
    }

    setIdioma(idioma: EIdioma) {
        this.idiomaDto.idioma = idioma;
        this.notifyAll();
    }

    notifyAll(): void {
        for (const key in this.observers) {
            if (Object.prototype.hasOwnProperty.call(this.observers, key)) {
                const observer:IObserver = this.observers[key];
                observer.notify(this.idiomaDto);
            }
        }
    }

    addObserser(observer: IObserver): void {
        this.observers[observer.getName()] = observer;
    }

    removeObserser(observer: IObserver): void { 
        if (this.observers[observer.getName()]) {
            delete this.observers[observer.getName()];
        }else{
            throw new Error("Observer no existe");
        }
    }

}