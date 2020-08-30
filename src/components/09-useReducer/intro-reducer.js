const initialState = [
    {
        id: 1,
        todo: 'Comprar pan',
        done: false,
    },
];

const todoReducer = (state = initialState, action) => {
    switch (action?.type) {
        case 'Agregar':
            return [...state, action.payload];
        default:
            return state;
    }
};

let state = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false,
};

const agregarTodoAction = {
    type: 'Agregar',
    payload: newTodo,
};

state = todoReducer(state, agregarTodoAction);

console.log(state);
