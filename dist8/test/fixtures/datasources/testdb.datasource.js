"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const config = {
    name: "testdb",
    connector: "memory",
    file: "testdb.json"
};
exports.testdb = new repository_1.juggler.DataSource(config);
//# sourceMappingURL=testdb.datasource.js.map