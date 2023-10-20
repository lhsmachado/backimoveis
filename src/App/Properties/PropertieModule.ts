import { PropertieRepository } from "./Repository/PropertieRepository";
import { PropertieService } from "./Service/PropertieService";
import { Propertie } from "./Entities/PropertiesSchema";
import { PropertieController } from "./Controller/PropertieController";
import { PhotoRepository } from "../Photos/Repository/PhotoRepository";
import { Photo } from "../Photos/Entitie/Photos";


class PropertieModule {
    static getInstance(){
        const repository = new PropertieRepository(Propertie)
        const photoRepository = new PhotoRepository(Photo)
        const service = new PropertieService(repository,photoRepository)
        const controller = new PropertieController(service)
        return controller;
    }
}

export {PropertieModule}