const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
// const midlewares = jsonServer.defaults();
const port = 3002;

server.db = router.db;

// server.use(midlewares);
server.use(auth);
server.use(router);

server.listen(port);
