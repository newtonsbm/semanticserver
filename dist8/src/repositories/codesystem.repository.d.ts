import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Codesystem } from '../models';
export declare class CodesystemRepository extends DefaultCrudRepository<Codesystem, typeof Codesystem.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
