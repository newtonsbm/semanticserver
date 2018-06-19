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
let ValueSet = class ValueSet extends repository_1.Entity {
    //sourceId
    //targetId
    getId() {
        return this.id;
    }
};
__decorate([
    repository_1.property({ type: 'number', id: true }),
    __metadata("design:type", Number)
], ValueSet.prototype, "id", void 0);
__decorate([
    repository_1.property({ type: 'string' }),
    __metadata("design:type", String)
], ValueSet.prototype, "identifier", void 0);
__decorate([
    repository_1.property({ type: 'string' }),
    __metadata("design:type", String)
], ValueSet.prototype, "version", void 0);
__decorate([
    repository_1.property({ type: 'string', required: true }),
    __metadata("design:type", String)
], ValueSet.prototype, "name", void 0);
__decorate([
    repository_1.property({ type: 'string' }),
    __metadata("design:type", String)
], ValueSet.prototype, "title", void 0);
__decorate([
    repository_1.property({ type: 'string', required: true }),
    __metadata("design:type", String)
], ValueSet.prototype, "status", void 0);
__decorate([
    repository_1.property({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], ValueSet.prototype, "experimental", void 0);
__decorate([
    repository_1.property({ type: Date }),
    __metadata("design:type", Date)
], ValueSet.prototype, "date", void 0);
__decorate([
    repository_1.property({ type: 'string' }),
    __metadata("design:type", String)
], ValueSet.prototype, "publisher", void 0);
__decorate([
    repository_1.property({ type: 'string' }),
    __metadata("design:type", String)
], ValueSet.prototype, "description", void 0);
__decorate([
    repository_1.property({ type: 'string' }),
    __metadata("design:type", String)
], ValueSet.prototype, "useContext", void 0);
__decorate([
    repository_1.property({ type: 'string' }),
    __metadata("design:type", String)
], ValueSet.prototype, "jurisdiction", void 0);
__decorate([
    repository_1.property({ type: 'string' }),
    __metadata("design:type", String)
], ValueSet.prototype, "purpose", void 0);
__decorate([
    repository_1.property({ type: 'string' }),
    __metadata("design:type", String)
], ValueSet.prototype, "copyright", void 0);
__decorate([
    repository_1.property({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], ValueSet.prototype, "extensible", void 0);
ValueSet = __decorate([
    repository_1.model()
], ValueSet);
exports.ValueSet = ValueSet;
//# sourceMappingURL=value_set.model.js.map