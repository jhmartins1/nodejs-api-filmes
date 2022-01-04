import { getRepository } from "typeorm";
import { Video } from "../entities/Video";

type VideoUpdateRequest = {
  id: string;
  name: string;
  description: string;
  duration: number;
  category_id: string;
}

export class UpdateVideoService {
  async execute({id, name, description, duration, category_id}: VideoUpdateRequest) {
    const repo = getRepository(Video);
    const video = await repo.findOne(id);

    if(!video) {
      return new Error('Video does not exists!')
    }

    video.name = name ? name : video.name;
    video.description = description ? description : video.description;
    video.duration = duration ? duration : video.duration;
    video.category_id = category_id ? category_id : video.category_id;

    await repo.save(video);
    return video;
  }
}