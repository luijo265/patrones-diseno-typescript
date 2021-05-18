import { addPlayItem, existPlayItem, playCache } from "./PlayCacheScript";
import { PlayItem } from "./Types";

export class PlayListService {

    private nombreLista:string;
    private canciones: PlayItem[] = [];

    constructor(nombreLista: string){
        this.nombreLista = nombreLista;
    }

    addCancion(nombre: string): void{
        this.canciones.push(this.getPlayItem(nombre))
    }

    private getPlayItem(nombre: string): PlayItem {
        return !existPlayItem(nombre)
            ? addPlayItem({ nombre, byte: [1,2,3,4] })
            : playCache[nombre];
    }

    get _canciones(){
        return this.canciones;
    }

    get _nombre(){
        return this.nombreLista;
    }
}