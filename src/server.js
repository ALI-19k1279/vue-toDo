import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      todo: Model,
    },

    routes() {
      this.namespace = "api";

      this.get("/todos/all", (schema) => {
        return schema.todos.all();
      });

      this.post("/todos/add", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.todos.create(attrs);
      });

      this.put("/todos/:id/update-status", (schema, request) => {
        const id = request.params.id;
        const attrs = JSON.parse(request.requestBody);
        const todo = schema.todos.find(id);
        return todo.update(attrs);
      });
      this.put("/todos/:id/edit-item", (schema, request) => {
        const id = request.params.id;
        const attrs = JSON.parse(request.requestBody);
        const todo = schema.todos.find(id);
        return todo.update(attrs);
      });

      this.delete("/todos/:id/delete", (schema, request) => {
        const id = request.params.id;
        return schema.todos.find(id).destroy();
      });
    },
  });

  return server;
}
