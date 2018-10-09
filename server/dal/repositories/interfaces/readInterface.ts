export interface IRead <T> {
    findById(id: number): Promise<T>;
    findAll(): Promise<T>;
}