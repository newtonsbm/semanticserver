import {Entity, property, model} from '@loopback/repository';


@model()
export class ConceptSet extends Entity {

    @property({type: 'number', id: true})
    id?: number;

    @property({type: 'number'})
    valueSetId: number;

    @property({type: 'number'})
    codesystemId: number;

    @property({type: 'string'})
    system: string;

    @property({type: 'string'})
    version: string;

    @property({type: 'string'})
    valueset: string;

}