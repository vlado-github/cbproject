export interface Read <T> {
    getAll(): Promise <T[]>;
    getByID(id: number): Promise <T>;
}