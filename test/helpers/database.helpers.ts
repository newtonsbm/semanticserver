import {CodesystemRepository,ConceptDefinitionRepository} from '../../src/repositories';
import {testdb} from '../fixtures/datasources/testdb.datasource';

export async function givenEmptyDatabase() {

    await new CodesystemRepository(testdb).deleteAll();
    
    await new ConceptDefinitionRepository(testdb).deleteAll();

}
