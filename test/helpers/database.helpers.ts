import {CodeSystemRepository,ConceptDefinitionRepository} from '../../src/repositories';
import {testdb} from '../fixtures/datasources/testdb.datasource';

export async function givenEmptyDatabase() {

    await new CodeSystemRepository(testdb).deleteAll();
    
    await new ConceptDefinitionRepository(testdb).deleteAll();

}
