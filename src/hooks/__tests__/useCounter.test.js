const { renderHook, act } = require('@testing-library/react-hooks');
const { useCounter } = require('../useCounter');

describe('Tests on useCounter', () => {
    test('should return default values', () => {
        const {
            result: {
                current: { counter, increment, decrement, reset },
            },
        } = renderHook(() => useCounter());

        expect(counter).toBe(10);
        expect(typeof increment).toBe('function');
        expect(typeof decrement).toBe('function');
        expect(typeof reset).toBe('function');
    });
    test('should return any number as starting value', () => {
        const {
            result: {
                current: { counter },
            },
        } = renderHook(() => useCounter(100));

        expect(counter).toBe(100);
    });
    test('should increment the counter', () => {
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;

        act(() => increment());

        const { counter } = result.current;
        expect(counter).toBe(11);
    });
    test('should decrement the counter', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current;

        act(() => decrement());

        const { counter } = result.current;
        expect(counter).toBe(9);
    });
    test('should reset the counter', () => {
        const { result } = renderHook(() => useCounter());
        const { increment, reset } = result.current;

        act(() => increment());
        act(() => reset());

        const { counter } = result.current;
        expect(counter).toBe(10);
    });
});
