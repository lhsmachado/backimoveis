import { Photo } from "./Entitie/Photos";
import { PhotoRepository } from "./Repository/PhotoRepository";


class PhotoModule {
  static getInstances() { 
    const repository = new PhotoRepository(Photo)
    return { repository }
  }
}

export { PhotoModule }