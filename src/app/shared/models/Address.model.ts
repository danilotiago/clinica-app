export class Address {
    cep: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;

    constructor(json?: any) {
        if (!json) return;
        
        this.cep          = json.cep;
        this.street       = json.street;
        this.number       = json.number;
        this.complement   = json.complement;
        this.neighborhood = json.neighborhood;
        this.city         = json.city;
        this.state        = json.state;
    }
}