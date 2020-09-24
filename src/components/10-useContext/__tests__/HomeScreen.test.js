import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../HomeScreen';
import { UserContext } from '../UserContext';

describe('Tests on HomeScreen', () => {
    const user = {
        id: 1,
        nombre: 'Juan Pablo',
    };
    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <HomeScreen />
        </UserContext.Provider>
    );
    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
