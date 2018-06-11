import { CodesystemRepository } from '../repositories';
import { Codesystem } from '../models';
export declare class CodesystemController {
    protected codesystemRepo: CodesystemRepository;
    constructor(codesystemRepo: CodesystemRepository);
    createCodesystem(codesystem: Codesystem): Promise<Codesystem>;
    findCodesystems(): Promise<Codesystem[]>;
}
