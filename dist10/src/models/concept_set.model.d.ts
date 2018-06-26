import { Entity } from '@loopback/repository';
export declare class ConceptSet extends Entity {
    id?: number;
    valueSetId: number;
    codeSystemId: number;
    system: string;
    version: string;
    valueset: string;
}
