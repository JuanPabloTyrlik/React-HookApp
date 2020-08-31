import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import TodoAddTask from './TodoAddTask';
import './styles.css';

const TodoApp = () => {
    const init = () => {
        return JSON.parse(localStorage.getItem('TodoList')) || [];
    };

    const [todoList, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('TodoList', JSON.stringify(todoList));
    }, [todoList]);

    const handleAdd = (todo) => {
        dispatch({
            type: 'Add',
            payload: todo,
        });
    };

    const handleDelete = (todo) => {
        const action = {
            type: 'Delete',
            payload: todo,
        };
        dispatch(action);
    };

    const handleToggle = (todo) => {
        dispatch({
            type: 'Toggle',
            payload: todo,
        });
    };

    return (
        <>
            <h1>TodoApp ( {todoList.length} )</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todoList={todoList}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                <div className="col-5">
                    <TodoAddTask handleAdd={handleAdd} />
                </div>
            </div>
        </>
    );
};

export default TodoApp;
