import * as Hapi from 'hapi';
import * as db from './database';

const server = new Hapi.Server();

server.connection({
  port: 3000
});

server.db = db;

server.start((err) => {

  if (err) {
    throw err;
  }

  console.log('Server running at:', server.info.uri);
});
