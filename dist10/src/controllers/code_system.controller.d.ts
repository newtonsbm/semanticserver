import { CodeSystemRepository } from '../repositories';
import { CodeSystem } from '../models';
export declare class CodeSystemController {
    protected codesystemRepo: CodeSystemRepository;
    constructor(codesystemRepo: CodeSystemRepository);
    createCodesystem(codesystem: CodeSystem): Promise<CodeSystem>;
    findCodesystems(): Promise<CodeSystem[]>;
}
