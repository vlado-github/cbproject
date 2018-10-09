export interface IWrite<T> {
    create(item: T): Promise<T>;
    update(id: number, obj: Object): Promise<T>;
}