import Vue from 'vue';
import Vuex from 'vuex';
import navbar from './modules/navbar'
import todolist from './modules/todolist'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        navbar,
        todolist
    },
    getters: {
        list: (state) => {
           return state.navbar.list
        },
        todolist: (state) => {
            if (state.navbar.currentList === 1) {
                return state.todolist.todolist.filter(item=>!item.done)
            } else if (state.navbar.currentList === 2) {
                return state.todolist.todolist.filter(item=>item.done)
            } else {
                return state.todolist.todolist
            }
        },
        count: (state)=>{
            return state.todolist.todolist.length
        }
    },
    plugins: [createPersistedState({
        key:'todolist'
    })]
})