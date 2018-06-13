import {Entity, property, model} from '@loopback/repository';

/*
url : identifier : Identifier [0..1] contact : ContactDetail [0..*]
description : markdown [0..1]
useContext : UsageContext [0..*]
jurisdiction : CodeableConcept [0..*] Jurisdiction ValueSet+ 
purpose : markdown [0..1]
copyright : markdown [0..1]
caseSensitive : boolean [0..1]
valueSet : uri [0..1]
hierarchyMeaning : code [0..1] CodeSystemHierarchyMeaning! 
compositional : boolean [0..1]
versionNeeded : boolean [0..1]
content : code [1..1] CodeSystemContentMode! 
count : unsignedInt [0..1]
*/

@model()
export class Codesystem extends Entity {

    @property({type: 'number', id: true})
    id?: number;

    @property({type: 'string'})
    url: string;

    //identifier

    @property({type: 'string'})
    version: string;

    @property({type: 'string', required: true})
    name: string;

    @property({type: 'string'})
    title: string;

    @property({type: 'string', required: true})
    status: string; //code PublicationStatus

    @property({type: 'boolean'})
    experimental: boolean; 

    @property({type: Date})
    date: Date; 
    
    @property({type: 'string'})
    publisher: string;

    //contact

    @property({type: 'string'})
    description: string;

    //useContext

    //jurisdiction

    @property({type: 'string'})
    purpose: string;

    @property({type: 'string'})
    copyright: string;

    @property({type: 'boolean'})
    caseSensitive: boolean; 

    //valueSet

    @property({type: 'string'})
    hierarchyMeaning: string;

    @property({type: 'boolean'})
    compositional: boolean; 

    @property({type: 'boolean'})
    versionNeeded: boolean; 

    @property({type: 'string', required: 'true'})
    content: string;

    @property({type: 'number'})
    count: number;

    getId(){
        return this.id;
    }

}