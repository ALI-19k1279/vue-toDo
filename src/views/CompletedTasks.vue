<template>
  <div>
    <h3>Completed Tasks</h3>
    <ul aria-labelledby="list-summary" class="stack-large">
      <li v-for="item in completedItems" :key="item.id">
        <to-do-item
          :label="item.label || 'null'"
          :done="item.done"
          :id="item.id"
          @checkbox-changed="updateDoneStatus(item.id)"
          @item-deleted="deleteToDo(item.id)"
          @item-edited="editToDo(item.id, $event)"
        >
        </to-do-item>
      </li>
    </ul>
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem.vue";
import { useToDoStore } from "@/stores/toDoStore";
export default {
  name: "CompletedTasksView",
  components: {
    ToDoItem,
  },
  data() {
    return {
      store: useToDoStore(),
    };
  },
  computed: {
    completedItems() {
      return this.store.completedItems;
    },
  },
  methods: {
    addToDo(toDoLabel) {
      this.store.addToDo(toDoLabel);
    },
    updateDoneStatus(toDoId) {
      this.store.updateDoneStatus(toDoId);
    },
    deleteToDo(toDoId) {
      this.store.deleteToDo(toDoId);
    },
    editToDo(toDoId, newLabel) {
      this.store.editToDo(toDoId, newLabel);
    },
  },
};
</script>
