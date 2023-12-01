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

  async FindByCode(id: string) {
    return await this.model.findById(id)
  }

  async FindAll(){
    // return await this.model.find().populate({
    //   path: 'fotos', 
    //   model: 'propertiesphotos',
    //   select: '-_id filename'})
    //   .select('-updatedAt -createdAt -__v')
    return await this.model.find().select('-updatedAt -createdAt -__v')

  }

  async Filter(filter: Filter) {
    const caseInsensitiveFilter: CaseInsensitiveFilter = {};
    for (const key in filter) {
    const filterValue = filter[key];
    if (Array.isArray(filterValue)) {
    const values = filterValue.map(value => new RegExp(`^{value.replace(/[-/\^$*+?.()|[\]{}]/g, '\\$&')}$|^\d+$`, 'i'));
    caseInsensitiveFilter[key] = {
    $in: values,
    };
    } else {
    caseInsensitiveFilter[key] = {
    $regex: filterValue,
    $options: 'i',
    };
    }
    }
    return await this.model.find(caseInsensitiveFilter).select('-__v')
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


async Pagination(limit: number, page: number){
  return this.model.find().sort( { _id: 1 } ).skip(page > 0 ? ( ( page - 1 ) * limit ) : 0).limit(limit).select('-__v')
}
}


export { PropertieRepository }