import { User } from './user.model';
import { Specialty } from './Specialty.model';

export class Professional {
    id: string;
    user: User;
    specialties: Specialty[];

    fromJson(json: any): this {
        this.id = json._id;
        this.user = (new User()).fromJson(json.user);
        
        return this;
    }

    fromObject(data: object): this {
        this.id = (<any>data)._id;
        this.user = (new User()).fromObject(data);
        
        return this;
    }

    toJson(): this {
        throw new Error('Not implemented');
    }
}