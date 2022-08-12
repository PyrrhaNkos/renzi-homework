export default {
    namespaced: true,
    state: {
        todolist:[]
    },
    mutations: {
        setTodolist(state,item) {
            state.todolist.unshift(item);
        },
        editTodolist(state, id) {
            const index = state.todolist.findIndex(item=> item.id === id)
            state.todolist[index].done = !state.todolist[index].done
        },
        delTodos(state, id) {
            state.todolist = state.todolist.filter(item => item.id !== id)
        },
        delDoneTodo(state) {
            state.todolist = state.todolist.filter(item => !item.done)
        }
    },
    actions:{}
}