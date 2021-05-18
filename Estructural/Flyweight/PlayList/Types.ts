export interface PlayItemAttr {
    nombre: string;
    byte: number[];
}

export interface PlayItem extends PlayItemAttr{
    id: bigint;
}

export type PlayCache = {
    [key: string]: PlayItem
}