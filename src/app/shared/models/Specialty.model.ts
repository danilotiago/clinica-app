export class Specialty {
    name: string;
    description: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;

    fromJson(json: any): this {
        this.name = json.name;
        this.description = json.description;
        this.image = json.image;
        this.createdAt = json.createdAt;
        this.updatedAt = json.updatedAt;
        
        return this;
    }
}