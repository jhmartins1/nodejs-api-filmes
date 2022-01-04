import { getRepository } from "typeorm";
import { Category } from "../entities/Category";


export class DeleteCategoryService {
  async execute(id: string) {
    const repo = getRepository(Category);
    if(!await repo.findOne(id)) {
      return new Error('Category does not exists!');
    }
    await repo.delete(id);
  }
}