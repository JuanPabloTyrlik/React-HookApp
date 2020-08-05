import React, { useEffect } from 'react';
import { useState } from 'react';

const Message = () => {
    const [coords, setCoords] = useState({
        x: 0,
        y: 0,
    });
    const {x, y} = coords;
    useEffect(() => {
        console.log('Componente Montado');

        const mouseMove = ({ x, y }) => {
            setCoords({ x, y });
            console.log(':D');
        };

        window.addEventListener('mousemove', mouseMove);
        return () => {
            console.log('Componente Desmontado');
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);
    return (
        <div>
            <h3>NANI?!</h3>
            <p>
                X:{x} Y:{y}
            </p>
        </div>
    );
};

export default Message;
