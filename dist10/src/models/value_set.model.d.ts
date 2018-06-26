import { Entity } from '@loopback/repository';
export declare class ValueSet extends Entity {
    id?: number;
    identifier: string;
    version: string;
    name: string;
    title: string;
    status: string;
    experimental: boolean;
    date: Date;
    publisher: string;
    description: string;
    useContext: string;
    jurisdiction: string;
    purpose: string;
    copyright: string;
    extensible: boolean;
    getId(): number | undefined;
}
