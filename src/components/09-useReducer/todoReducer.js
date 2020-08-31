export const todoReducer = (state = [], { type, payload }) => {
    switch (type) {
        case 'Add':
            return [...state, payload];
        case 'Delete':
            return state.filter((elem) => elem.id !== payload.id);
        case 'Toggle':
            return state.map((elem) =>
                elem.id === payload.id ? { ...elem, done: !elem.done } : elem
            );
        default:
            return state;
    }
};
