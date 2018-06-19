import { Entity } from '@loopback/repository';
export declare class Property extends Entity {
    id?: number;
    conceptDefinitionId: number;
    propertyId: number;
    code: string;
    value: string;
}
