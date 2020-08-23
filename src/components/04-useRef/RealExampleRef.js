import React from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import { useState } from 'react';

const RealExampleRef = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button
                className="btn btn-primary mt-3"
                onClick={() => setShow(!show)}
            >
                {show ? "Hide" : "Show"}
            </button>
        </div>
    );
};

export default RealExampleRef;
