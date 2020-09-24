import { shallow } from 'enzyme';
import React from 'react';
import TodoList from '../TodoList';

describe('Tests on TodoList', () => {
    const demoTodos = [
        {
            id: 1,
            desc: 'Aprender React',
            done: true,
        },
        {
            id: 2,
            desc: 'Aprender Mongo',
            done: false,
        },
    ];
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(
        <TodoList
            todoList={demoTodos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    );
    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('todo')).toEqual(
            demoTodos[0]
        );
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(
            expect.any(Function)
        );
        expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(
            expect.any(Function)
        );
    });
});
