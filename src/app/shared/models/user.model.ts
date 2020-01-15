import { Address } from './Address.model';

export class User {
    id: string;
    name: string;
    birthDate: Date;
    email: string;
    password: string;
    profiles: [string];
    address: Address;

    constructor(json?: any) {
        this.id = json._id;
        this.name = json.name;
        this.birthDate = json.birthDate;
        this.email = json.email;
        this.password = json.password;
        this.profiles = json.profiles;
        this.address = new Address(json.address);
    }
}