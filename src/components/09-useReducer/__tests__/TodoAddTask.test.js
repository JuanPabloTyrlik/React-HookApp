import { shallow } from 'enzyme';
import React from 'react';
import TodoAddTask from '../TodoAddTask';

describe('Tests on TodoAddTask', () => {
    const handleAdd = jest.fn();

    const wrapper = shallow(<TodoAddTask handleAdd={handleAdd} />);

    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should not call handleAdd', () => {
        const submit = wrapper.find('form').prop('onSubmit');
        submit({ preventDefault() {} });
        expect(handleAdd).not.toHaveBeenCalled();
    });
    test('should call handleAdd', () => {
        wrapper.find('input').simulate('change', {
            target: { name: 'description', value: 'Aprender React' },
        });
        const submit = wrapper.find('form').prop('onSubmit');
        submit({ preventDefault() {} });
        expect(handleAdd).toHaveBeenCalledTimes(1);
        expect(handleAdd).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: 'Aprender React',
            done: false,
        });
        expect(wrapper.find('input').text()).toBe('');
    });
});
