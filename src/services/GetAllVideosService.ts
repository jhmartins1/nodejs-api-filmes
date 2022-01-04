import { getRepository } from "typeorm";
import { Video } from "../entities/Video";


export class GetAllVideosService {
  async execute() {
    const repo = getRepository(Video);
    const videos = await repo.find();
    return videos;
  }
}