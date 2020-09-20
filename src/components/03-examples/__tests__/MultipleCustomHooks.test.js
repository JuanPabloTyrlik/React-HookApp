import React from 'react';
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');

describe('Tests on MultipleCustomHooks', () => {
    test('should render correctly', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });
    test('should show information', () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: 'Walter White',
                    quote: 'I am not in danger, Skyler. I am the danger!',
                },
            ],
            loading: false,
            error: null,
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('p').text().trim()).toMatch(
            'I am not in danger, Skyler. I am the danger!'
        );
        expect(wrapper.find('.blockquote-footer').text().trim()).toMatch(
            'Walter White'
        );
    });
});
