const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const cors = require("cors");
const midlewares = jsonServer.defaults();
const port = 3002;

server.db = router.db;

server.use(midlewares);
server.use(auth);
server.use(router);
server.use(cors);

server.listen(port);
