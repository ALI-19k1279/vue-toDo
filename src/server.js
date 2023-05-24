import { createServer, Model } from "miragejs";
import { uniqueId } from "lodash.uniqueid";
// const ApplicationSerializer = RestSerializer.extend({});
export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      todo: Model,
    },

    seeds(server) {
      server.create("todo", {
        id: uniqueId("todo-"),
        label: "Task 1",
        done: false,
      });
      server.create("todo", {
        id: uniqueId("todo-"),
        label: "Task 2",
        done: true,
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/todos", (schema) => {
        return schema.todos.all();
      });

      this.post("/todos", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.todos.create(attrs);
      });

      this.put("/todos/:id", (schema, request) => {
        const id = request.params.id;
        const attrs = JSON.parse(request.requestBody);
        const todo = schema.todos.find(id);
        return todo.update(attrs);
      });

      this.delete("/todos/:id", (schema, request) => {
        const id = request.params.id;
        return schema.todos.find(id).destroy();
      });
    },
  });

  return server;
}
