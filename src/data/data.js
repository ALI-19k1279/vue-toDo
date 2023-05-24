const uniqueId = require("lodash.uniqueid");

export const generateToDoItems = () => [
  { id: uniqueId("todo-"), label: "learn vue3", done: false },
  { id: uniqueId("todo-"), label: "learn pinia", done: false },
  { id: uniqueId("todo-"), label: "learn vue best practices", done: false },
];

export const initialToDoItems = generateToDoItems();
