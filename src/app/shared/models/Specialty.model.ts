export class Specialty {
    id: string;
    name: string;
    description: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    procedures: String[];

    fromJson(json: any): this {
        this.id = json._id;
        this.name = json.name;
        this.description = json.description;
        this.image = json.image;
        this.procedures = json.procedures;
        this.createdAt = json.createdAt;
        this.updatedAt = json.updatedAt;
        
        return this;
    }

    fromObject(data: object): this {
        this.id          = (<any>data).id;
        this.name        = (<any>data).name;
        this.description = (<any>data).description;
        this.image       = (<any>data).image;
        this.procedures  = (<any>data).procedures;
        this.createdAt   = (<any>data).createdAt;
        this.updatedAt   = (<any>data).updatedAt;

        return this;
    }
}