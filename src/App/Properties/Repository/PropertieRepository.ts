import { Model, NumberSchemaDefinition } from "mongoose";
import { PropertieDocument } from "../Entities/PropertiesSchema";

interface Filter {
  [key: string]: string;
}

type CaseInsensitiveFilter = {
  [key: string]: {
    $regex: string;
    $options: string;
  } | {
    $in: RegExp[];
  }
}


class PropertieRepository {
  constructor(private model: Model<PropertieDocument>) { }

  async Create(data: PropertieDocument) {
    return await this.model.create(data);
  }

  async VerifyCode(codigo: number) {
    return await this.model.find({codigo});
  }

  async AddCode(codigo: number, id: number) {
    return await this.model.findOneAndUpdate(
      {_id: id},
      {codigo}),
      {new: true}
  }


  async ListAllProperties() {
    return await this.model.find();
  }

  async FindByCode(code: number) {
    return await this.model.find
  }

  async FindAll(){
    return await this.model.find().populate({
      path: 'fotos', 
      model: 'propertiesphotos',
      select: '-_id filename'})
      .select('-updatedAt -createdAt -__v')
  }

  async Filter(filter: Filter) {
    const caseInsensitiveFilter: CaseInsensitiveFilter = {};

    for (const key in filter) {
      const filterValue = filter[key];

      if (key === "technology") {
        // Array.isArray(filter[key]) verifica se o valor da chave key no filter é um array.
        // Se for um array ele usa esse array
        // Se for um valor apenas usa ele mas como array ainda sempre sera array
        const technolodyNames = Array.isArray(filterValue) ? filterValue : [filterValue];

        // $in: Este operador aceita um array e verifica se pelo menos um deles está em um objeto
        caseInsensitiveFilter[key] = {
          $in: technolodyNames.map(name => new RegExp(`^${name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}$`, 'i')),
        };
      } else {
        caseInsensitiveFilter[key] = {
          $regex: filterValue,
          $options: 'i',
        };
      }
    }

    return await this.model.find(caseInsensitiveFilter);
  }

  async FindByName(names: string | string[]) {
    if (!Array.isArray(names)) {
      names = [names]; // Se não for array, transforma em um array com um único elemento
    }
    return await this.model.find({ name: { $in: names.map(name => new RegExp(`^${name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}$`, 'i')) } });
  }


  async EditPropertie(id: string, dataToUpdate: any){
    return await this.model.findByIdAndUpdate(
      {_id: id},
      { $set: dataToUpdate },
      { new: true }
    );
}


}


export { PropertieRepository }