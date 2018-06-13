import {Entity, property, model} from '@loopback/repository';


@model()
export class ConceptDefinition extends Entity {

    @property({type: 'number', id: true})
    id?: number;

    @property({type: 'number', id: true})
    codesystem_id: number;

    @property({type: 'string'})
    code: string;

    @property({type: 'string'})
    display: string;

    @property({type: 'string'})
    definition: string;

}