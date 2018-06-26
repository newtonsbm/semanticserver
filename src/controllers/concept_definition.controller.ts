// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import {repository} from '@loopback/repository';
import {ConceptDefinitionRepository} from '../repositories';
import { get, post, requestBody } from '@loopback/rest';
import { ConceptDefinition } from '../models';


export class ConceptDefinitionController {

  constructor(
    @repository(ConceptDefinitionRepository) protected conceptDefRepo: ConceptDefinitionRepository,
  ) {}

  @post('/ConceptDefinition')
  async createConceptDefinition(@requestBody() conceptDefinition: ConceptDefinition) {
    return await this.conceptDefRepo.create(conceptDefinition);
  }

}
