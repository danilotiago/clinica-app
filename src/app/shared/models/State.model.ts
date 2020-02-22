export class State {
    id: string;
    name: string;
    abbreviation: string;

    fromJson(json: any) {
        this.id           = json._id;
        this.name         = json.name;
        this.abbreviation = json.abbreviation;

        return this;
    }

    fromObject(data: object): this {
        this.id           = (<any>data)._id || (<any>data).id;
        this.name         = (<any>data).name;
        this.abbreviation = (<any>data).abbreviation;

        return this;
    }
}