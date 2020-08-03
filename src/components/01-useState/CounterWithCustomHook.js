import React from 'react';
import './counter.css';
import { useCounter } from '../hooks/useCounter';

const CounterWithCustomHook = () => {

    const { state: counter, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => increment(5)}>+5</button>
            <button className="btn btn-primary" onClick={() => decrement(5)}>-5</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
        </>
    );
};

export default CounterWithCustomHook;
