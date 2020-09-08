import React from 'react';
import { shallow } from 'enzyme';
import HookApp from '../HooksApp';

describe('HookApp', () => {
    test('should render HookApp', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
});
