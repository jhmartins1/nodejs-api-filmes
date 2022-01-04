import { Request, Response } from "express";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";


export class GetAllCategoriesController {
  async handle(req: Request, res: Response) {
    const service = new GetAllCategoriesService();
    const categories = await service.execute();
    return res.json(categories)
  }
}