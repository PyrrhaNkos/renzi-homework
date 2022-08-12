export default {
    namespaced: true,
    state: {
        list: [
            {id:0,label:'全部'},{id:1,label:'未完成'},{id:2,label:'已完成'},
        ],
        currentList:0
    },
    mutations: {
        setList(state,list) {
            state.list = list;
        },
        setCurrentList(state, cur) {
            state.currentList = cur;
        }
    },
    actions:{}
}