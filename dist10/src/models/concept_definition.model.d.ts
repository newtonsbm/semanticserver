import { Entity } from '@loopback/repository';
export declare class ConceptDefinition extends Entity {
    id?: number;
    codeSystemId: number;
    code: string;
    display: string;
    definition: string;
}
