import { shallow } from 'enzyme';
import React from 'react';
import TodoListItem from '../TodoListItem';

describe('Tests on TodoListItem', () => {
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
        <TodoListItem
            key={demoTodos[0].id}
            todo={demoTodos[0]}
            i={demoTodos[0].id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />
    );

    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should call handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0]);
    });
    test('should call handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalled();
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0]);
    });
    test('should render text correctly', () => {
        expect(wrapper.find('p').text()).toMatch(`2. Aprender React`);
    });
    test('should cross out item', () => {
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });
});
