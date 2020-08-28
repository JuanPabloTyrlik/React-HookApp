import React from 'react';
import PropTypes from 'prop-types';

const ShowIncrement = React.memo(({ incrementar }) => {
    console.log('Me volví a generar :(');
    return (
        <button className="btn btn-primary" onClick={() => incrementar(5)}>
            Incrementar
        </button>
    );
})

ShowIncrement.propTypes = {
    incrementar: PropTypes.func.isRequired
};

export default ShowIncrement;
