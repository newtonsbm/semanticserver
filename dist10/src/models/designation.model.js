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
let Designation = class Designation extends repository_1.Entity {
};
__decorate([
    repository_1.property({ type: 'number', id: true }),
    __metadata("design:type", Number)
], Designation.prototype, "id", void 0);
__decorate([
    repository_1.property({ type: 'number' }),
    __metadata("design:type", Number)
], Designation.prototype, "conceptDefinitionId", void 0);
__decorate([
    repository_1.property({ type: 'string' }),
    __metadata("design:type", String)
], Designation.prototype, "language", void 0);
__decorate([
    repository_1.property({ type: 'string' }),
    __metadata("design:type", String)
], Designation.prototype, "use", void 0);
__decorate([
    repository_1.property({ type: 'string' }),
    __metadata("design:type", String)
], Designation.prototype, "value", void 0);
Designation = __decorate([
    repository_1.model()
], Designation);
exports.Designation = Designation;
//# sourceMappingURL=designation.model.js.map