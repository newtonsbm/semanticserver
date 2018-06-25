// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import {repository} from '@loopback/repository';
import {CodeSystemRepository} from '../repositories';
import { get, post, requestBody } from '@loopback/rest';
import { CodeSystem } from '../models';


export class CodeSystemController {

  constructor(
    @repository(CodeSystemRepository) protected codesystemRepo: CodeSystemRepository,
  ) {}

  @post('/codesystems')
  async createCodesystem(@requestBody() codesystem: CodeSystem) {
    return await this.codesystemRepo.create(codesystem);
  }

  @get('/codesystems')
  async findCodesystems(): Promise<CodeSystem[]> {
    return await this.codesystemRepo.find();
  }

}
