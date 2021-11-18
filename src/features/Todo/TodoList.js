import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { addTodo, startTodo, completeTodo, selectTodosAll } from "./TodoListSlice"
import { addTodo, startTodo, rejectTodo, completeTodo,selectTodosAll ,selectTodos ,selectTodosInProgress, selectTodosCompleted } from "./TodoListSlice"
import TodoItem from './TodoItem';

export function TodoList() {
    const [todoName, setTodoName] = useState('')
    const todos = useSelector(selectTodosAll);
      const todoList = useSelector(selectTodos);
     const inProgressList = useSelector(selectTodosInProgress);
    const completedList = useSelector(selectTodosCompleted);
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addTodo(todoName))
        setTodoName('');
    };

    const AddTodo = (todoName) => {
        console.log(todoName)
        //event.target.preventDefault();
        dispatch(addTodo(todoName));
    }

    const StartTodo = (todoName) => {
        console.log(todoName)
        //event.target.preventDefault();
        dispatch(startTodo(todoName));
    }

    const CompleteToDo = (todoName) => {
        console.log(todoName)
        //event.target.preventDefault();
        dispatch(completeTodo(todoName));
    }

    const RejectToDo = (todoName) => {
        console.log(todoName)
        //event.target.preventDefault();
        dispatch(rejectTodo(todoName));
    }

    return (

        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Add Todo</p>
                    <input type="text"
                        onChange={e => setTodoName(e.target.value)}
                        value={todoName}></input>
                </label>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <ul>
                                {todoList.map(todo => (
                                    <li key={todo.name+'_123'}>
                                     <TodoItem todo={todo} action={'Start'}/>                                   
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td>
                            <ul>
                                {inProgressList.map(todo => (
                                    <li key={todo.name}>
                                        <b>{todo.name}</b>
                                        <b>
                                            &nbsp;Status: {todo.status}
                                            <button onClick={() => CompleteToDo(todo.name)}><span role="img" aria-label="add"><div>Finished</div></span></button>
                                        </b>
                                    </li>
                                ))}
                            </ul>

                        </td>
                        <td>
                            <ul>
                                {completedList.map(todo => (
                                    <li key={todo.name}>
                                        <b>{todo.name}</b>
                                        <b>
                                            &nbsp;Status: {todo.status}
                                            <button onClick={() => RejectToDo(todo.name)}><span role="img" aria-label="add"><div>Reject</div></span></button>
                                        </b>
                                    </li>
                                ))}
                            </ul>

                        </td>
                    </tr>
                </tbody>
            </table>


        </div>
    );

}