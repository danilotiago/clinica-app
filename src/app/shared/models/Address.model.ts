import { State } from './State.model';

export class Address {
    cep: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: State;

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

    fromObject(data: object): this {
        this.cep          = (<any>data).cep;
        this.street       = (<any>data).street;
        this.number       = (<any>data).number;
        this.complement   = (<any>data).complement;
        this.neighborhood = (<any>data).neighborhood;
        this.city         = (<any>data).city;
        this.state        = (new State()).fromObject((<any>data).state);

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