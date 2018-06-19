import { Entity } from '@loopback/repository';
export declare class Property extends Entity {
    id?: number;
    codesystemId: number;
    code: string;
    uri: string;
    definition: string;
    description: string;
}
