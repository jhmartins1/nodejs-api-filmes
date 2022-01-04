import {Request, Response} from 'express'
import { CreateCategoryService } from '../services/CreateCategoryService'


export class CreateCategoryController {
  async handle(req: Request, res: Response) { 
    const {name, description} = req.body
    const service = new CreateCategoryService();
    const result = await service.execute({name, description})

    if(result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}