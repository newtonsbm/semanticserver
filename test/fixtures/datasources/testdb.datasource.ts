import * as path from 'path';
import {juggler} from '@loopback/repository';

const config = {
  name: "testdb",
  connector: "memory",
  file: "testdb.json"

};

export const testdb = new juggler.DataSource(config);
