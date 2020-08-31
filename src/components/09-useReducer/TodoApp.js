import React, { useReducer, useEffect } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

const TodoApp = () => {
    const init = () => {
        return JSON.parse(localStorage.getItem('TodoList')) || [];
    };

    const [todoList, dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    });

    useEffect(() => {
        localStorage.setItem('TodoList', JSON.stringify(todoList));
    }, [todoList]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 0) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        const action = {
            type: 'Add',
            payload: newTodo,
        };

        dispatch(action);

        reset();
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
                    <ul className="list-group list-group-flush">
                        {todoList.map((todo, i) => (
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
                        ))}
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender..."
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default TodoApp;
