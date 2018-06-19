"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const testlab_1 = require("@loopback/testlab");
const database_helpers_1 = require("../helpers/database.helpers");
const rest_1 = require("@loopback/rest");
const testdb_datasource_1 = require("../fixtures/datasources/testdb.datasource");
describe('Codesystem (acceptance)', () => {
    let app;
    let client;
    before(database_helpers_1.givenEmptyDatabase);
    before(givenRunningApp);
    after(async () => { await app.stop(); });
    it('creates a codesystem', async () => {
        let codesystemData = {
            name: 'test_code_system',
            title: 'Test Code System',
            status: 'completed',
            content: 'conteúdo'
        };
        let response = await client.post('/codesystems')
            .set('Content-Type', 'application/json')
            .send(codesystemData);
        testlab_1.expect(response.body).to.containEql(codesystemData);
    });
    async function givenRunningApp() {
        app = new __1.SemanticServerApplication();
        app.dataSource(testdb_datasource_1.testdb);
        const server = await app.getServer(rest_1.RestServer);
        server.bind(rest_1.RestBindings.PORT).to(0);
        await app.boot();
        await app.start();
        client = testlab_1.createClientForHandler(server.requestHandler);
    }
});
//# sourceMappingURL=codesystem.acceptance.js.map