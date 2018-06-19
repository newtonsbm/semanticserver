import {Entity, property, model} from '@loopback/repository';

@model()
export class ValueSet extends Entity {

    @property({type: 'number', id: true})
    id?: number;

    @property({type: 'string'})
    identifier: string;

    @property({type: 'string'})
    version: string;

    @property({type: 'string', required: true})
    name: string;

    @property({type: 'string'})
    title: string;

    @property({type: 'string', required: true})
    status: string; 

    @property({type: 'boolean'})
    experimental: boolean; 

    @property({type: Date})
    date: Date; 
    
    @property({type: 'string'})
    publisher: string;

    //contact

    @property({type: 'string'})
    description: string;

    @property({type: 'string'})
    useContext: string;

    @property({type: 'string'})
    jurisdiction: string;

    @property({type: 'string'})
    purpose: string; 

    @property({type: 'string'})
    copyright: string;

    @property({type: 'boolean'})
    extensible: boolean;

    //sourceId

    //targetId

    getId(){
        return this.id;
    }

}