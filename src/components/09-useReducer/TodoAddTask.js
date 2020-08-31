import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';

const TodoAddTask = ({ handleAdd }) => {
    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    });

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

        handleAdd(newTodo);

        reset();
    };

    return (
        <>
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
        </>
    );
};

TodoAddTask.propTypes = {
    handleAdd: PropTypes.func.isRequired,
};

export default TodoAddTask;
