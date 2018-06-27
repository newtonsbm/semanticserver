import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {ConceptMap} from '../models';
import {inject} from '@loopback/core';

export class ConceptMapRepository extends DefaultCrudRepository<ConceptMap, typeof ConceptMap.prototype.id>
{
    constructor( @inject('datasources.db') protected datasource: juggler.DataSource,){
        super(ConceptMap, datasource)
    }
}