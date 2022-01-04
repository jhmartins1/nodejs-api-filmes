import { Request, Response } from "express";
import { DeleteCategoryService } from "../services/DeleteCategoryService";



export class DeleteCategoryController {
  async handle(req: Request, res: Response) {
    const {id} = req.params;
    const service = new DeleteCategoryService();
    const result = await service.execute(id)

    if(result instanceof Error) {
      return res.status(400).json(result.message)
    }
    return res.status(200).json({message: 'Categoria Deletada com sucesso'});
  }
}