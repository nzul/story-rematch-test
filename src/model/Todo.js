export const todo = {
    state: {
        todoList: [1,2,3]
    },
    reducers: {
        // handle state change with pure functions
        add(state, payload) {
            state.todoList.push(payload);
            return {
                ...state,
            }
        }
    },
    effects: {
        // handle state change with impure functions.
        // use async/await for async actions
        async addAsync(payload, rootState) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            this.increment(payload);
        }
    }
};