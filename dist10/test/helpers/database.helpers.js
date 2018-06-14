"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../../src/repositories");
const testdb_datasource_1 = require("../fixtures/datasources/testdb.datasource");
async function givenEmptyDatabase() {
    await new repositories_1.CodesystemRepository(testdb_datasource_1.testdb).deleteAll();
    await new repositories_1.ConceptDefinitionRepository(testdb_datasource_1.testdb).deleteAll();
}
exports.givenEmptyDatabase = givenEmptyDatabase;
//# sourceMappingURL=database.helpers.js.map