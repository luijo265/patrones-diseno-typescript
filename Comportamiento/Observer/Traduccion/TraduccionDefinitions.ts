export enum EIdioma {
    es="es",
    en="en"
}

export type TTraduccion = {
    [idioma: string]: string;
}

export type TIdioma = {
    [idioma: string]: TTraduccion;
}
