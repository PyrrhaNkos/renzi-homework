<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>数量值</strong> {{count}}</span>
    <ul class="filters">
      <li v-for="item in list" :key="item.id" @click="checkNav(item.id)">
        <a :class="{selected:currentList===item.id}" href="javascript:;" >{{item.label}}</a>
      </li>
    </ul>
    <button class="clear-completed" @click="delDone">清除已完成</button>
  </footer>
</template>

<script>
import { mapMutations,mapGetters} from 'vuex'
export default {
  computed: {
    list() {
    return this.$store.getters.list
    },
    currentList() {
    return this.$store.state.navbar.currentList
    },
  ...mapGetters(['count'])
  },
  methods: {
    ...mapMutations('todolist',['delDoneTodo']),
    checkNav(id) {
    this.$store.commit('navbar/setCurrentList',id)
    },
    delDone() {
    this.delDoneTodo()
  }
}
}
</script>
