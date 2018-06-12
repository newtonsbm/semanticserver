"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
/*
url : identifier : Identifier [0..1] contact : ContactDetail [0..*]
description : markdown [0..1]
useContext : UsageContext [0..*]
jurisdiction : CodeableConcept [0..*] Jurisdiction ValueSet+
purpose : markdown [0..1]
copyright : markdown [0..1]
caseSensitive : boolean [0..1]
valueSet : uri [0..1]
hierarchyMeaning : code [0..1] CodeSystemHierarchyMeaning!
compositional : boolean [0..1]
versionNeeded : boolean [0..1]
content : code [1..1] CodeSystemContentMode!
count : unsignedInt [0..1]
*/
let Codesystem = class Codesystem extends repository_1.Entity {
    getId() {
        return this.id;
    }
};
__decorate([
    repository_1.property({ type: 'number', id: true }),
    __metadata("design:type", Number)
], Codesystem.prototype, "id", void 0);
__decorate([
    repository_1.property({ type: 'string' }),
    __metadata("design:type", String)
], Codesystem.prototype, "version", void 0);
__decorate([
    repository_1.property({ type: 'string' }),
    __metadata("design:type", String)
], Codesystem.prototype, "uri", void 0);
__decorate([
    repository_1.property({ type: 'string', required: true }),
    __metadata("design:type", String)
], Codesystem.prototype, "name", void 0);
__decorate([
    repository_1.property({ type: 'string' }),
    __metadata("design:type", String)
], Codesystem.prototype, "title", void 0);
__decorate([
    repository_1.property({ type: 'string', required: true }),
    __metadata("design:type", String)
], Codesystem.prototype, "status", void 0);
__decorate([
    repository_1.property({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], Codesystem.prototype, "experimental", void 0);
__decorate([
    repository_1.property({ type: Date }),
    __metadata("design:type", Date)
], Codesystem.prototype, "date", void 0);
__decorate([
    repository_1.property({ type: 'string' }),
    __metadata("design:type", String)
], Codesystem.prototype, "publisher", void 0);
Codesystem = __decorate([
    repository_1.model()
], Codesystem);
exports.Codesystem = Codesystem;
//# sourceMappingURL=codesystem.model.js.map