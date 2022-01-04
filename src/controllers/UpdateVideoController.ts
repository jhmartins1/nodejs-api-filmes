import { Request, Response } from "express";
import { UpdateVideoService } from "../services/UpdateVideoService";


export class UpdateVideoController {
  async handle(req: Request, res: Response) {
    const {id} = req.params
    const {name, description, duration, category_id} = req.body
    const service = new UpdateVideoService();
    const result = await service.execute({id, name, description, duration, category_id});

    if(result instanceof Error) {
      res.status(400).json(result.message);
    }

    return res.json(result)
  }
}