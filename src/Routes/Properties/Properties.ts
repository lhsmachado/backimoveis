import { Router } from "express";
import { PropertieModule } from "../../App/Properties/PropertieModule";
import multer, { diskStorage } from "multer"


const PropertieRoute = Router();
const controller = PropertieModule.getInstance();


const multerConfig = diskStorage({
    destination: (req, file, cb) => {
      cb(null, './src/photos')
    },
    filename: (req, file, cb) => {
      const [filename, extension] = file.originalname.split(".")
      const formattedFilename = `${filename}-${Date.now()}.${extension}`
      cb(null, formattedFilename)
    },
  })
const upload = multer({ storage: multer.memoryStorage() });


PropertieRoute.post("/", upload.array("files", 10), controller.Create.bind(controller));
PropertieRoute.get("/", controller.FindAll.bind(controller));
PropertieRoute.get("/query", controller.FilterPagination.bind(controller));
PropertieRoute.patch("/edit/:id", controller.Edit.bind(controller));



export {PropertieRoute }