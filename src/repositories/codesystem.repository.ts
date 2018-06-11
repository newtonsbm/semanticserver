import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Codesystem} from '../models';
import {inject} from '@loopback/core';

export class CodesystemRepository extends DefaultCrudRepository<Codesystem, typeof Codesystem.prototype.id>
{
    constructor( @inject('datasources.db') protected datasource: juggler.DataSource,){
        super(Codesystem, datasource)
    }
}