import { ConceptDefinitionRepository } from '../repositories';
import { ConceptDefinition } from '../models';
export declare class ConceptDefinitionController {
    protected conceptDefRepo: ConceptDefinitionRepository;
    constructor(conceptDefRepo: ConceptDefinitionRepository);
    createConceptDefinition(conceptDefinition: ConceptDefinition): Promise<ConceptDefinition>;
}
