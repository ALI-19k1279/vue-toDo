<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h2 class="label-wrapper">
        <label for="to-do-input" class="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="to-do-input"
        name="new-todo"
        autocomplete="off"
        class="input__lg"
        v-model.lazy.trim="label"
      />
      <button type="submit" class="btn btn__primary btn__lg">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      if (this.label === "") {
        return;
      }
      this.$emit("todo-added", this.label);
      this.label = "";
    },
  },
  data() {
    return {
      label: "",
    };
  },
};
</script>
