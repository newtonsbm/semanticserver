// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import {repository} from '@loopback/repository';
import {CodesystemRepository} from '../repositories';
import { get, post, requestBody } from '@loopback/rest';
import { Codesystem } from '../models';


export class CodesystemController {

  constructor(
    @repository(CodesystemRepository) protected codesystemRepo: CodesystemRepository,
  ) {}

  @post('/codesystems')
  async createCodesystem(@requestBody() codesystem: Codesystem) {
    return await this.codesystemRepo.create(codesystem);
  }

  @get('/codesystems')
  async findCodesystems(): Promise<Codesystem[]> {
    return await this.codesystemRepo.find();
  }

}
