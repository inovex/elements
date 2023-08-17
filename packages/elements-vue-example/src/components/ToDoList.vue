<template>
  <div id="todo-list">
    <ino-input
      type="text"
      placeholder="What to do ..."
      :value="inputText"
      @valueChange="({detail}) => inputText = detail"
      @keyup.enter="onAdd"
    >
      <ino-icon
        slot="icon-trailing"
        clickable
        icon="add"
        @clickEl="onAdd"
      />
    </ino-input>
    <ino-list :key="Date.now()">
      <ino-list-item
        v-for="todo in uncheckedTodos"
        :key="todo.id"
        :text="todo.text"
      >
        <ino-checkbox
          slot="leading"
          @checkedChange="onCheckedChange(todo)"
        />
        <ino-tooltip
          slot="trailing"
          label="Remove item"
          placement="right"
          :for="`remove-unchecked-${todo.id}`"
        />
        <ino-icon-button
          :id="`remove-unchecked-${todo.id}`"
          slot="trailing"
          icon="remove"
          @click="removeTodo(todo)"
        />
      </ino-list-item>
      <ino-list-divider />
      <ino-list-item
        v-for="todo in checkedTodos"
        :key="todo.id"
        :text="todo.text"
      >
        <ino-checkbox
          slot="leading"
          checked="true"
          @checkedChange="onCheckedChange(todo)"
        />
        <ino-tooltip
          slot="trailing"
          label="Remove item"
          placement="right"
          :for="`remove-checked-${todo.id}`"
        />
        <ino-icon-button
          :id="`remove-checked-${todo.id}`"
          slot="trailing"
          icon="remove"
          @click="removeTodo(todo)"
        />
      </ino-list-item>
    </ino-list>
    <div class="list-action-buttons">
      <ino-button
        :disabled="isResetButtonDisabled"
        fill="outline"
        @click="resetToDoList"
      >
        Reset ToDo list
      </ino-button>
      <ino-button @click="clearToDoList">
        Clear ToDo list
      </ino-button>
    </div>
  </div>
</template>

<script>

import {
  InoButton,
  InoCheckbox,
  InoIcon, InoIconButton, InoInput,
  InoList, InoListDivider, InoListItem, InoTooltip,
} from "@inovex.de/elements-vue";

const initialToDoList = [{
  id: Math.floor(Date.now() * Math.random()),
  text: 'Go to the grocery store',
  checked: false
}, {
  id: Math.floor(Date.now() * Math.random()),
  text: 'Clean up desk',
  checked: false
}, {
  id: Math.floor(Date.now() * Math.random()),
  text: 'Fix bug',
  checked: true
}];

export default {
  name: "ToDoList",
  components: {
    InoButton, InoList, InoListItem,
    InoCheckbox, InoTooltip, InoIconButton,
    InoInput, InoIcon, InoListDivider,
  },
  data() {
    return {
      todos: [],
      inputText: ''
    };
  },
  computed: {
    uncheckedTodos() {
      return this.todos.filter((todo) => !todo.checked);
    },
    checkedTodos() {
      return this.todos.filter((todo) => todo.checked);
    },
    isResetButtonDisabled() {
      return JSON.stringify(this.todos) === JSON.stringify(initialToDoList)
    }
  },
  mounted() {
    this.resetToDoList();
  },
  methods: {
    onAdd() {
      if (!this.inputText) {
        return;
      }

      this.todos.push({
        id: Math.floor(Date.now() * Math.random()),
        text: this.inputText,
        checked: false
      });
      this.inputText = '';
    },
    onCheckedChange(todo) {
      todo.checked = !todo.checked;
    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    clearToDoList() {
      this.todos = [];
    },
    resetToDoList() {
      this.todos = JSON.parse(JSON.stringify(initialToDoList));
    }
  }
}
</script>

<style scoped>
.list-action-buttons {
  display: flex;
  justify-content: space-between;
}

ino-menu {
  position: absolute;
  z-index: 1000;
}
</style>
