// const assert = require('assert');
// const server = require('./app');

// describe('App', () => {
//     it('Should return Hello From Atharv!!!', () => {
//         assert.strictEqual(server(), 'Hello from Atharv!!');
//     }); 
// });

const assert = require('assert');
const server = require('./app');

describe('createServer', () => {
  it('should start a server that responds with "Hello World"', (done) => {
    server();
    const options = {
      hostname: 'localhost',
      port: 8088,
      path: '/',
      method: 'GET'
    };
    const req = http.request(options, (res) => {
      assert.strictEqual(res.statusCode, 200);
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        assert.strictEqual(data, 'Hello from Atharv!!');
        done();
      });
    });
    req.end();
  });
});
