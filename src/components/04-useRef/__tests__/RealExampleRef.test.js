import React from 'react';
import { shallow } from 'enzyme';
import RealExampleRef from '../RealExampleRef';
import { act } from '@testing-library/react-hooks';

describe('Tests on RealExampleRef', () => {
    const wrapper = shallow(<RealExampleRef />);
    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should render MultipleCustomHooks', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});
