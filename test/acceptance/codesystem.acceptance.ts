import {SemanticServerApplication} from '../..';
import {expect, createClientForHandler, Client} from '@loopback/testlab';
import {givenEmptyDatabase} from '../helpers/database.helpers';
import {RestServer, RestBindings} from '@loopback/rest';
import {testdb} from '../fixtures/datasources/testdb.datasource';

describe('Codesystem (acceptance)', () => {

    let app: SemanticServerApplication;
    let client: Client;

    before(givenEmptyDatabase);
    before(givenRunningApp);
    after(async() => { await app.stop(); });

    it('creates a codesystem', async () => {
        let codesystemData = {
            name: 'test_code_system',
            title: 'Test Code System',
            status: 'completed',
            content: 'conteúdo'
        };
        let response = await client.post('/CodeSystem')
            .set('Content-Type','application/json')
            .send(codesystemData);
        expect(response.body).to.containEql(codesystemData);
    });

    async function givenRunningApp() {
        app = new SemanticServerApplication();
        app.dataSource(testdb);
        const server = await app.getServer(RestServer);
        server.bind(RestBindings.PORT).to(0);
        await app.boot();
        await app.start();
        client = createClientForHandler(server.requestHandler);
    }
});