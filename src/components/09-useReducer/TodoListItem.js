import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
    return (
        <li key={todo.id} className="list-group-item">
            <p
                className={`${todo.done && 'complete'}`}
                onClick={() => handleToggle(todo)}
            >
                {i + 1}. {todo.desc}
            </p>
            <button
                onClick={() => handleDelete(todo)}
                className="btn btn-danger"
            >
                Borrar
            </button>
        </li>
    );
};

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
};

export default TodoListItem;
