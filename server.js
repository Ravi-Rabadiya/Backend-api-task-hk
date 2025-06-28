const jsonServer = require('json-server');
const cors = require('cors'); // 👉 Add this line
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 5000;

// 👉 Add this CORS setup BEFORE middleware
server.use(
  cors({
    origin: '*', // 👈 For development only — allows all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
