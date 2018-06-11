"use strict";
// Uncomment these imports to begin using these cool features!
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {inject} from @loopback/context;
const repository_1 = require("@loopback/repository");
const repositories_1 = require("../repositories");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
let CodesystemController = class CodesystemController {
    constructor(codesystemRepo) {
        this.codesystemRepo = codesystemRepo;
    }
    async createCodesystem(codesystem) {
        return await this.codesystemRepo.create(codesystem);
    }
    async findCodesystems() {
        return await this.codesystemRepo.find();
    }
};
__decorate([
    rest_1.post('/codesystems'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Codesystem]),
    __metadata("design:returntype", Promise)
], CodesystemController.prototype, "createCodesystem", null);
__decorate([
    rest_1.get('/codesystems'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CodesystemController.prototype, "findCodesystems", null);
CodesystemController = __decorate([
    __param(0, repository_1.repository(repositories_1.CodesystemRepository)),
    __metadata("design:paramtypes", [repositories_1.CodesystemRepository])
], CodesystemController);
exports.CodesystemController = CodesystemController;
//# sourceMappingURL=codesystem.controller.js.map