import { Entity } from '@loopback/repository';
export declare class CodeSystem extends Entity {
    id?: number;
    url: string;
    version: string;
    name: string;
    title: string;
    status: string;
    experimental: boolean;
    date: Date;
    publisher: string;
    description: string;
    purpose: string;
    copyright: string;
    caseSensitive: boolean;
    hierarchyMeaning: string;
    compositional: boolean;
    versionNeeded: boolean;
    content: string;
    count: number;
    getId(): number | undefined;
}
