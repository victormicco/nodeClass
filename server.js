// import { createServer } from "node:http";

// const server = createServer((request, response) => {
//   response.write("ola");
//   return response.end();
// });

// server.listen(3333);

import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory();

server.post("/videos", (request, reply) => {
  database.create({
    title: "video 01",
    description: "video 01 description",
    duration: 120,
  });
  console.log(database.list());
  return reply.status(201).send();
});

server.get("/videos", () => {
  return "Hello Path One";
});
server.put("/videos/:id", () => {
  return "Hello Path One";
});
server.delete("/videos/:id", () => {
  return "Hello Path One";
});

server.listen({
  port: 3333,
});
