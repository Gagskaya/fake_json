const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const midlewares = jsonServer.defaults();
const port = 3002;

server.use(midlewares);
server.use(router);

server.listen(port);
