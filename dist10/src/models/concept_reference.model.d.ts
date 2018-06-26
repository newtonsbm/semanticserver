import { Entity } from '@loopback/repository';
export declare class ConceptReference extends Entity {
    id?: number;
    conceptSetId: number;
    conceptDefinitionId: number;
}
