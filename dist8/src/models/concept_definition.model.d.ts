import { Entity } from '@loopback/repository';
export declare class ConceptDefinition extends Entity {
    id?: number;
    codesystemId: number;
    code: string;
    display: string;
    definition: string;
}
