import { Address } from './Address.model';

export class User {
    id: string;
    name: string;
    birthDate: Date;
    email: string;
    password: string;
    profiles: [string];
    address: Address;

    fromJson(json: any): this {
        this.id = json._id;
        this.name = json.name;
        this.birthDate = json.birthDate;
        this.email = json.email;
        this.password = json.password;
        this.profiles = json.profiles;
        this.address = (new Address()).fromJson(json.address);
        
        return this;
    }

    fromObject(data: object): this {
        this.id = (<any>data)._id;
        this.name = (<any>data).name;
        this.birthDate = (<any>data).birthDate;
        this.email = (<any>data).email;
        this.password = (<any>data).password;
        this.profiles = (<any>data).profiles;
        this.address = (new Address()).fromObject(data);
        
        return this;
    }

    toJson(): this {
        throw new Error('Not implemented');
    }
}