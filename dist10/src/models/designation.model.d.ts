import { Entity } from '@loopback/repository';
export declare class Designation extends Entity {
    id?: number;
    conceptDefinitionId: number;
    language: string;
    use: string;
    value: string;
}
