import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export const Todolist = () => {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const formHandler = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setTodoList((prev) => [...prev, inputValue]);
            setInputValue('');
        }
    };

    const removeTask = (index) => {
        setTodoList((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
                <div className="p-4 rounded bg-secondary" style={{ maxWidth: "400px", width: "100%" }}>
                    <h2 className="text-center pt-2 mb-4">To-Do List </h2>
                    <form onSubmit={formHandler} className="d-flex mb-3">
                        <input
                            className="form-control me-2"
                            type="text"
                            placeholder="Enter your task"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" class="btn btn-warning fw-bold d-flex align-items-center">
                        <Icon icon="carbon:add-filled" className="me-1" /> Add
                        </button>

                    </form>
                    <div>
                        {todoList.map((task, index) => (
                            <div key={index} className="d-flex justify-content-between align-items-center bg-dark text-light rounded p-2 mb-2">
                                <h4 className='m-0'>{task}</h4>
                                <button
                                    className="btn btn-danger btn-sm d-flex align-items-center"
                                    onClick={() => removeTask(index)}
                                >
                                    <Icon icon="mdi:trash-can" className="me-1" />
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
