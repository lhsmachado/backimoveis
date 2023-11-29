import { PropertieDocument } from "../Entities/PropertiesSchema";
import { MakeErrors } from "../../../Utils/MakeErrors/MakeErrors";
import { STATUS_CODE } from "../../../Utils/StatusCode/STATUS_CODE";
import { PropertieRepository } from "../Repository/PropertieRepository";
import { PhotoRepository } from "../../Photos/Repository/PhotoRepository";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../../Config/Firebase.config";
const storage = getStorage(app);

interface CreatePropertieDto {
  titulo: string;
  tipo: string;
  codigo: number;
  cidade: string;
  UF: string;
  descricao: string;
  suite: number;
  quartos: number;
  vagagaragem: number;
  banheiros: number;
  valorCondominio: number | null;
  IPTU: number | null;
  precoAluguel: number | null;
  precoVenda: number | null;
  fotos: string[];
  files: {
    filename: string;
    mimetype: string;
  };
}
interface Filter {
  [key: string]: string;
}

class PropertieService {
  constructor(
    private repository: PropertieRepository,
  ) {}

  async CreatePropertie(data: PropertieDocument & CreatePropertieDto) {
    let AleatoryCode = Math.floor(10000000 + Math.random() * 90000000);
    console.log("Codigo Aleatorio ", AleatoryCode);
    console.log("data na service", data.files);

    // Garantir que o código seja único
    const VerifyCode = await this.repository.VerifyCode(AleatoryCode);
    if (VerifyCode) {
      AleatoryCode = Math.floor(1000000000 + Math.random() * 9000000000);
    }
    // Adiciona o código ao objeto antes de criar
    data.codigo = AleatoryCode;

    const files = data.files;

    if (files && Array.isArray(files)) {
      const uploadPromises = files.map(async (file) => {
        const [filename, extension] = file.originalname.split(".");
        console.log("original name", file.originalname);
        const formattedFilename = `${VerifyCode}-${Date.now()}.${extension}`;

        const storageRef = ref(storage, formattedFilename);
        await uploadBytesResumable(storageRef, file.buffer);

        // Obtenha a URL da imagem após o upload
        const downloadURL = await getDownloadURL(storageRef);

        return downloadURL;
      });

      try {
        // Aguarde o término de todos os uploads e obtenha as URLs
        const imageURLs = await Promise.all(uploadPromises);

        const PropertiePayload = {
          ...data,
          fotos: imageURLs,
        };
        const createdPropertie = await this.repository.Create(PropertiePayload);

        console.log("Propriedade criada com sucesso:", createdPropertie);
        // Agora você pode usar imageURLs conforme necessário
        console.log("URLs das imagens:", imageURLs);
        return createdPropertie;
        // Restante do seu código aqui...
      } catch (error: any) {
        console.error("Erro interno no servidor:", error.message);
        return MakeErrors("Erro interno no servidor", STATUS_CODE.BAD_REQUEST);
      }
    }
  }

  async FindAll() {
    return await this.repository.FindAll();
  }


  async FilterFromService(filter: Filter) {
    console.log('query chegada na service', filter);
    try {
      const Result = await this.repository.Filter(filter);
      if(Result.length === 0){
        return {result: 'Nenhuma propriedade encontrada'}
      }
      return Result;
    } catch (error: any) {
      return MakeErrors(error.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
    }
  }


  async EditService(id: string, body: string) {
    try {
      const result = await this.repository.EditPropertie(id, body);
      return result;
    } catch (error: any) {
      console.error("Erro interno no servidor:", error.message);
      return MakeErrors("Erro interno no servidor", STATUS_CODE.BAD_REQUEST);
    }
  }

  async Pagination(limit: number, page: number){
    try{
        return this.repository.Pagination(limit, page)
    }catch (error: any) {
      console.error("Erro interno no servidor:", error.message);
      return MakeErrors("Erro interno no servidor", STATUS_CODE.BAD_REQUEST);
    }
}


}

export { PropertieService };