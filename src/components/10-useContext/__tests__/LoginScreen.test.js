import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../LoginScreen';
import { UserContext } from '../UserContext';

describe('Tests on LoginScreen', () => {
    const user = {
        id: 1,
        nombre: 'Juan Pablo',
    };
    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider value={{ setUser }}>
            <LoginScreen />
        </UserContext.Provider>
    );
    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should login an user', () => {
        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenCalledWith({
            id: expect.any(Number),
            nombre: expect.any(String),
        });
    });
});
