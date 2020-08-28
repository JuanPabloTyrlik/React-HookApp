import React from 'react';
import { useState } from 'react';
import ShowIncrement from './ShowIncrement';
import { useCallback } from 'react';

const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // const incrementar = () => {
    //     setCounter(counter + 1);
    // };

    const incrementar = useCallback( (n) => {
        setCounter(prevCounter => prevCounter + n);
    }, [setCounter]);

    return (
        <div>
            <h1>Callback Hook: {counter} </h1>
            <hr/>
            <ShowIncrement incrementar={incrementar} />
        </div>
    );
};

export default CallbackHook;
