export interface IIterator<T> {
    hasNext(): boolean;
    next(): T;
}

export interface IContainer<T> {
    createIterator(): IIterator<T>;
}