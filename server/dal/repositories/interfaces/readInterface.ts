export interface IRead <T> {
    //getAll(): Promise <T[]>;
    getByID(id: number);
}