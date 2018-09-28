export interface Write<T,G> {
    save(obj: T, dbmodel: G);
}