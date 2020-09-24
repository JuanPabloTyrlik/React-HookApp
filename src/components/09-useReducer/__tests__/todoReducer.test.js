import { todoReducer } from '../todoReducer';

describe('Tests on todoReducer', () => {
    const demoTodos = [
        {
            id: 1,
            desc: 'Aprender React',
            done: false,
        },
        {
            id: 2,
            desc: 'Aprender Mongo',
            done: false,
        },
    ];

    test('should return default values', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('should add a new element', () => {
        const state = todoReducer(demoTodos, {
            type: 'Add',
            payload: {
                id: 3,
                desc: 'Terminar seccion Testing',
                done: false,
            },
        });
        expect(state.length).toBe(3);
        expect(state[2]).toEqual({
            id: 3,
            desc: 'Terminar seccion Testing',
            done: false,
        });
    });
    test('should delete an element', () => {
        const state = todoReducer(demoTodos, {
            type: 'Delete',
            payload: {
                id: 2,
                desc: 'Aprender Mongo',
                done: false,
            },
        });
        expect(state.length).toBe(1);
        expect(state.find((elem) => elem.id === 2)).toBe(undefined);
    });
    test('should move a task to pending or complete', () => {
        const state = todoReducer(demoTodos, {
            type: 'Toggle',
            payload: {
                id: 1,
                desc: 'Aprender React',
                done: false,
            },
        });
        expect(state.find((elem) => elem.id === 1).done).toBe(true);
    });
});
