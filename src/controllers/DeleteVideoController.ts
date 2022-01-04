import { Request, Response } from "express";
import { DeleteVideoService } from "../services/DeleteVideoService";


export class DeleteVideoController {
  async handle(req: Request, res: Response) {
    const {id} = req.params
    const service = new DeleteVideoService();
    const result = await service.execute(id);

    if(result instanceof Error) {
      res.status(400).json(result.message)
    }

    return res.status(200).json({message: 'Video deletado com sucesso'})
  }
}