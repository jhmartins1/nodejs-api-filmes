import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
  name: string;
  description: string
}

export class CreateCategoryService {
  async execute({name, description}: CategoryRequest): Promise<Category | Error> {
    const repo = getRepository(Category);
    // SELECT * FROM CATEGORIES WHERE NAME = 'NAME' LIMIT 1
    if(await repo.findOne({name})) {
      return new Error('Category already exists');
    }

    const category = repo.create({
      name,
      description
    });
    
    await repo.save(category);
    return category;
  }
}