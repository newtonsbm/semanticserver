import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {ConceptDefinition} from '../models';
import {inject} from '@loopback/core';

export class ConceptDefinitionRepository extends DefaultCrudRepository<ConceptDefinition, typeof ConceptDefinition.prototype.id>
{
    constructor( @inject('datasources.db') protected datasource: juggler.DataSource,){
        super(ConceptDefinition, datasource)
    }
}