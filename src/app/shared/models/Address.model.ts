export class Address {
    cep: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;

    fromJson(json: any): this {
        this.cep          = json.cep;
        this.street       = json.street;
        this.number       = json.number;
        this.complement   = json.complement;
        this.neighborhood = json.neighborhood;
        this.city         = json.city;
        this.state        = json.state;

        return this;
    }

    fromJsonCEP(json: any): this {
        this.cep          = json.cep;
        this.street       = json.logradouro;
        this.complement   = json.complemento;
        this.neighborhood = json.bairro;
        this.city         = json.localidade;
        this.state        = json.uf;

        return this;
    }

    toJson(): this {
        throw new Error('Not implemented');
    }
}