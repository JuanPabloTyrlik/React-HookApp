import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {todoList.map((todo, i) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    i={i}
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
};

export default TodoList;
