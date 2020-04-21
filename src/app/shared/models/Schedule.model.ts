import { User } from './user.model';
import { Professional } from './Professional.model';
import { Specialty } from './Specialty.model';

export class Schedule {
    id: String;
    patient: User;
    professional: Professional;
    specialty: Specialty;
    procedures: String[];
    observations: String;
    status: String;
    requestDate: Date;
    requestHour: String;
    aprovalDate: Date;
    createdAt: Date;
    updatedAt: Date;

    fromJson(json?: any) {
        this.id           = json._id;
        this.patient      = (new User()).fromJson(json.patient);
        this.professional = (new Professional()).fromJson(json.professional);
        this.specialty    = (new Specialty()).fromJson(json.specialty);
        this.procedures   = json.procedures;
        this.observations = json.observations;
        this.requestDate  = json.requestDate;
        this.requestHour  = json.requestHour;
        this.aprovalDate  = json.aprovalDate;
        this.status       = json.status;
        this.createdAt    = json.createdAt;
        this.updatedAt    = json.updatedAt;
    }
}