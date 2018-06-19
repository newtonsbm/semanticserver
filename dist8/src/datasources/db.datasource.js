"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const repository_1 = require("@loopback/repository");
const dsConfigPath = path.resolve(__dirname, '../../../config/datasources.json');
const config = require(dsConfigPath);
exports.db = new repository_1.juggler.DataSource(config);
//# sourceMappingURL=db.datasource.js.map