import {Entity, property, model} from '@loopback/repository';


@model()
export class Designation extends Entity {

    @property({type: 'number', id: true})
    id?: number;

    @property({type: 'number'})
    conceptDefinitionId: number;

    @property({type: 'string'})
    language: string;

    @property({type: 'string'})
    use: string;

    @property({type: 'string'})
    value: string;

}