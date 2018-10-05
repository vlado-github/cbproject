export interface IWrite<T> {
    create(item: T): void;
}