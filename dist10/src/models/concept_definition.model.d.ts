import { Entity } from '@loopback/repository';
export declare class ConceptDefinition extends Entity {
    id?: number;
    codesystem_id: number;
    code: string;
    display: string;
    definition: string;
}
