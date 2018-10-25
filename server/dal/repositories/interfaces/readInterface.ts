export interface IRead <T> {
    findById(id: number): Promise<T>;
    //todo: use param, never return all
    findAll(): Promise<T>;
}