import { defineStore } from "pinia";
import { initialToDoItems } from "@/data/data";
import uniqueId from "lodash.uniqueid";

export const useToDoStore = defineStore("todo", {
  state: () => ({
    ToDoItems: initialToDoItems,
    currentView: "all",
    searchQuery: "",
  }),
  getters: {
    listSummary() {
      const noOfFinshedItems = this.ToDoItems.filter(
        (item) => item.done
      ).length;
      return `${noOfFinshedItems} out of ${this.ToDoItems.length} items completed`;
    },
    pendingItems() {
      const noOfPendingItems = this.ToDoItems.filter((item) => !item.done);
      return noOfPendingItems;
    },
    completedItems() {
      const noOfFinshedItems = this.ToDoItems.filter((item) => item.done);
      return noOfFinshedItems;
    },
    allItems() {
      return this.ToDoItems;
    },
  },
  actions: {
    addToDo(toDoLabel) {
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
      console.log(updateToDoItem);
    },
    deleteToDo(toDoId) {
      const itemIndex = this.ToDoItems.findIndex((item) => item.id === toDoId);
      this.ToDoItems.splice(itemIndex, 1);
    },
    editToDo(toDoId, newLabel) {
      const toDoToEdit = this.ToDoItems.find((item) => item.id === toDoId);
      toDoToEdit.label = newLabel;
    },
    setCurrentView(view) {
      this.currentView = view;
    },
  },
});
