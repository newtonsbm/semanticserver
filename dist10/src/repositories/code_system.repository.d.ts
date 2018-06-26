import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { CodeSystem } from '../models';
export declare class CodeSystemRepository extends DefaultCrudRepository<CodeSystem, typeof CodeSystem.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
