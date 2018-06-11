import {SemanticServerApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {SemanticServerApplication};

export async function main(options?: ApplicationConfig) {
  const app = new SemanticServerApplication(options);
  await app.boot();
  await app.start();
  return app;
}
