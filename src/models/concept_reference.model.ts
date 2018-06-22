import {Entity, property, model} from '@loopback/repository';


@model()
export class ConceptReference extends Entity {

    @property({type: 'number', id: true})
    id?: number;

    @property({type: 'number'})
    conceptSetId: number;

    @property({type: 'number'})
    conceptDefinitionId: number;

}