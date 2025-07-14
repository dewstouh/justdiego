// db/utils/Repository.ts
import { QueryParams } from '../../../types/src/interfaces/QueryParams'


export class Repository<T> {
    private model: any
    constructor(model: any) {
        this.model = model
    }

    findMany(params: QueryParams = {}) {
        return this.model.findMany(params)
    }

    findFirst(params: QueryParams = {}) {
        return this.model.findFirst(params)
    }

    findUnique(where: object) {
        return this.model.findUnique({ where })
    }

    create(data: T) {
        return this.model.create({ data })
    }
    update(where: object, data: Partial<T>) {
        return this.model.update({ where, data })
    }
    delete(where: object) {
        return this.model.delete({ where })
    }
}


