export const count = {
    state: {
        counter: 0
    },
    reducers: {
        // handle state change with pure functions
        increment(state, payload) {
            return {
                ...state,
                counter: state.counter + payload
            }
        }
    },
    effects: {
        // handle state change with impure functions.
        // use async/await for async actions
        async incrementAsync(payload, rootState) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            this.increment(payload);
        }
    }
};