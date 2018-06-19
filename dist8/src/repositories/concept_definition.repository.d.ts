import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { ConceptDefinition } from '../models';
export declare class ConceptDefinitionRepository extends DefaultCrudRepository<ConceptDefinition, typeof ConceptDefinition.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
