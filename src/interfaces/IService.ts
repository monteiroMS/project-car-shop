export interface IService<T> {
  create(obj: T): Promise<T | null>;
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>;
  updateById(id: string, obj: T): Promise<T | null>;
}