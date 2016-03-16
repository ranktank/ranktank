import * as MongoDB from 'mongodb';
import * as Promise from 'bluebird';

const MongoClient = Promise.promisifyAll(MongoDB).MongoClient;

export const url = 'mongodb://localhost:27017/ranktank';

export function connect() {
  return MongoClient.connectAsync(url);
};

export default MongoClient;
