import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../AppRouter';
import { UserContext } from '../UserContext';

describe('Tests on AppRouter', () => {
    const user = {
        id: 1,
        nombre: 'Juan Pablo',
    };
    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <AppRouter />
        </UserContext.Provider>
    );
    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
