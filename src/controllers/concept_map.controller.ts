// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import {repository} from '@loopback/repository';
import {ConceptMapRepository} from '../repositories';
import { get, post, requestBody } from '@loopback/rest';
import { ConceptMap } from '../models';


export class ConceptMapController {

  constructor(
    @repository(ConceptMapRepository) protected conceptMapRepo: ConceptMapRepository,
  ) {}

  @post('/CodeSystem')
  async createConceptMap(@requestBody() codesystem: ConceptMap) {
    return await this.conceptMapRepo.create(codesystem);
  }

  @get('/CodeSystem')
  async findConceptMaps(): Promise<ConceptMap[]> {
    return await this.conceptMapRepo.find();
  }

}
