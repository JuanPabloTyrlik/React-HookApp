import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutScreen = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h1>About Screen</h1>
            <hr />
            <pre>{JSON.stringify(user, null, 4)}</pre>

            <button className="btn btn-warning" onClick={() => setUser({})}>
                Log Out
            </button>
        </>
    );
};
