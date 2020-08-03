import React from 'react';
import './counter.css';
import { useState } from 'react';

const CounterApp = () => {
    const [{ counter1, counter2, counter3, counter4, counter5 }, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
        counter5: 50,
    });
    return (
        <>
            <h1>Counter1: {counter1}</h1>
            <h1>Counter2: {counter2}</h1>
            <h1>Counter3: {counter3}</h1>
            <h1>Counter4: {counter4}</h1>
            <h1>Counter5: {counter5}</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() =>
                    setCounter((counter) => ({
                        ...counter,
                        counter1: counter1 + 1,
                    }))
                }
            >
                +1
            </button>
        </>
    );
};

export default CounterApp;
