export class Hour {
    id: String;
    date: Date;
    hour: String;

    fromJson(json: any): this {
        this.id   = json.id;
        this.date = json.date;
        this.hour = json.hour;

        return this;
    }
}