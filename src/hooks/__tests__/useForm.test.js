const { renderHook, act } = require('@testing-library/react-hooks');
const { useForm } = require('../useForm');

describe('Tests on useForm', () => {
    const initialForm = {
        nombre: 'Juan Pablo',
        email: 'juan.pablo@gmail.com',
    };
    test('should return a default form', () => {
        const {
            result: { current },
        } = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = current;
        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });
    test('should change formValues', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const event = {
            target: {
                name: 'nombre',
                value: 'Pedro',
            },
        };

        act(() => result.current[1](event));
        expect(result.current[0]).toEqual({ ...initialForm, nombre: 'Pedro' });
    });
    test('should reset formValues', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const event = {
            target: {
                name: 'nombre',
                value: 'Pedro',
            },
        };

        act(() => result.current[1](event));
        expect(result.current[0]).toEqual({ ...initialForm, nombre: 'Pedro' });
        act(() => result.current[2]());
        expect(result.current[0]).toEqual(initialForm);
    });
});
