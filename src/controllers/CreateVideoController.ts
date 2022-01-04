import { Request, Response } from "express";
import { CreateVideoService } from "../services/CreateVideoService";


export class CreateVideoController {
  async handle(req: Request, res: Response) {
    const {name, description, duration, category_id} = req.body
    const service = new CreateVideoService();
    const result = await service.execute({
      name,
      description,
      duration,
      category_id
    })

    if(result instanceof Error) {
      return res.status(400).json(result.message)
    }

    return res.json(result);
  }
}