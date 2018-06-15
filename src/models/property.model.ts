import {Entity, property, model} from '@loopback/repository';


@model()
export class Property extends Entity {

    @property({type: 'number', id: true})
    id?: number;

    @property({type: 'number'})
    codesystemId: number;

    @property({type: 'string'})
    code: string;

    @property({type: 'string'})
    uri: string;

    @property({type: 'string'})
    definition: string;

    @property({type: 'string'})
    description: string;

}