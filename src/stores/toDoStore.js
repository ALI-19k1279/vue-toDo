import { defineStore } from "pinia";
import uniqueId from "lodash.uniqueid";
import { initialToDoItems } from "@/data/data";

export const useToDoStore = defineStore("todo", {
  state: () => ({
    ToDoItems: initialToDoItems,
  }),
  getters: {
    listSummary() {
      const noOfFinshedItems = this.ToDoItems.filter(
        (item) => item.done
      ).length;
      return `${noOfFinshedItems} out of ${this.ToDoItems.length} items completed`;
    },
    allItems() {
      return this.ToDoItems;
    },
  },
  actions: {
    addToDo(toDoLabel) {
      console.log("to do added", toDoLabel);
      this.ToDoItems.push({
        id: uniqueId("todo-"),
        label: toDoLabel,
        done: false,
      });
    },
    updateDoneStatus(toDoId) {
      const updateToDoItem = this.ToDoItems.find((item) => item.id === toDoId);
      console.log(updateToDoItem.label);
      updateToDoItem.done = !updateToDoItem.done;
    },
    deleteToDo(toDoId) {
      const itemIndex = this.ToDoItems.findIndex((item) => item.id === toDoId);
      this.ToDoItems.splice(itemIndex, 1);
    },
    editToDo(toDoId, newLabel) {
      const toDoToEdit = this.ToDoItems.find((item) => item.id === toDoId);
      toDoToEdit.label = newLabel;
    },
  },
});
