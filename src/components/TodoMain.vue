<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{completed : item.done}" v-for="item in todolist" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" :checked="item.done" @click="checkTodo(item.id)"/>
        <label>{{item.do}}</label>
        <button class="destroy" @click="delTodo(item.id)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  computed: {
    todolist() {
      return this.$store.getters.todolist
    }
  },
  methods: {
    ...mapMutations('todolist',['editTodolist','delTodos']),
    checkTodo(id) {
      this.editTodolist(id)
    },
    delTodo(id) {
      this.delTodos(id)
    }
  }
}
</script>
