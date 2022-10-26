export interface IService<T> {
  create(obj: T): Promise<T>;
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>;
}