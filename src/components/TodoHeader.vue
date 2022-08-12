<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
       @keyup.enter="enter" v-model="todos"
    />
  </header>
</template>

<script>
import { nanoid } from "nanoid";
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
    todos:''
    }
  },
  methods: {
    ...mapMutations('todolist',['setTodolist']),
    enter() {
      if (!this.todos.trim()) return;
      const addObj = { id: nanoid(), do: this.todos, done: false }
      this.setTodolist(addObj);
    this.todos = ''
  }
}
}
</script>
