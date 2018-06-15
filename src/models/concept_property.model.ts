import {Entity, property, model} from '@loopback/repository';


@model()
export class Property extends Entity {

    @property({type: 'number', id: true})
    id?: number;

    @property({type: 'number'})
    conceptDefinitionId: number;

    @property({type: 'number'})
    propertyId: number;

    @property({type: 'string'})
    code: string;

    @property({type: 'string'})
    value: string;

}