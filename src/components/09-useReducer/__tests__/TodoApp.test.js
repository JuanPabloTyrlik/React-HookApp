import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import TodoApp from '../TodoApp';

describe('Tests on TodoApp', () => {
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
    Storage.prototype.setItem = jest.fn();
    test('should render correctly', () => {
        const wrapper = shallow(<TodoApp />);
        expect(wrapper).toMatchSnapshot();
    });
    test('should function correctly', () => {
        const wrapper = mount(<TodoApp />);
        act(() => {
            wrapper.find('TodoAddTask').prop('handleAdd')(demoTodos[0]);
            wrapper.find('TodoAddTask').prop('handleAdd')(demoTodos[1]);
        });
        expect(wrapper.find('h1').text()).toMatch('TodoApp ( 2 )');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);

        act(() => {
            wrapper.find('TodoList').prop('handleDelete')(demoTodos[1]);
        });
        expect(wrapper.find('h1').text()).toMatch('TodoApp ( 1 )');
        expect(localStorage.setItem).toHaveBeenCalledTimes(3);
    });
});
