import { Entity } from '@loopback/repository';
export declare class Codesystem extends Entity {
    id?: number;
    version: string;
    uri: string;
    name: string;
    title: string;
    status: string;
    experimental: boolean;
    date: Date;
    publisher: string;
    getId(): number | undefined;
}
