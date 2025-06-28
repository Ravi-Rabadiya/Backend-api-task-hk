const jsonServer = require('json-server');
const cors = require('cors'); // ✅ Import cors

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

// ✅ Use CORS with options BEFORE middleware/router
server.use(
  cors({
    origin: '*', // 🟡 Replace with your frontend URL for security (see note below)
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`✅ JSON Server is running on port ${port}`);
});
