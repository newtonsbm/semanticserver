import { ConceptDefinitionRepository } from '../repositories';
import { ConceptDefinition } from '../models';
export declare class ConceptDefinitionController {
    protected conceptDefRepo: ConceptDefinitionRepository;
    constructor(conceptDefRepo: ConceptDefinitionRepository);
    createCodesystem(conceptDefinition: ConceptDefinition): Promise<ConceptDefinition>;
}
