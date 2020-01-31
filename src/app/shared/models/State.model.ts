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
}