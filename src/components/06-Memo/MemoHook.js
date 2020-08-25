import React, { useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';

const MemoHook = () => {
    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>
                Counter: <small>{counter}</small>
            </h3>
            <hr />

            <p>{memoProcesoPesado}</p>

            <button
                className="btn btn-primary mt-3 mr-3"
                onClick={() => increment(1)}
            >
                +1
            </button>

            <button
                className="btn btn-primary mt-3"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    );
};

export default MemoHook;
