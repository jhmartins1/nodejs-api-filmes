import { Request, Response } from "express";
import { GetAllVideosService } from "../services/GetAllVideosService";


export class GetAllVideosController {
  async handle(req: Request, res: Response) {
    const service = new GetAllVideosService();
    const videos = await service.execute();
    return res.json(videos);
  }
}