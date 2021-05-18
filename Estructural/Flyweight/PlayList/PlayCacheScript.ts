import { PlayCache, PlayItem, PlayItemAttr } from "./Types"

let consecutivo: bigint = 0n;
export const playCache: PlayCache = {}
export const existPlayItem = (nombre: string) => (playCache[nombre] != undefined)
export const addPlayItem = (playItemAttr: PlayItemAttr) => {
    const playItem: PlayItem = { id: ++consecutivo, ...playItemAttr }
    playCache[playItem.nombre] = playItem
    return playItem;
}