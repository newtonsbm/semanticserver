import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {CodeSystem} from '../models';
import {inject} from '@loopback/core';

export class CodeSystemRepository extends DefaultCrudRepository<CodeSystem, typeof CodeSystem.prototype.id>
{
    constructor( @inject('datasources.db') protected datasource: juggler.DataSource,){
        super(CodeSystem, datasource)
    }
}