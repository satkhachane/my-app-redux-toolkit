import React from 'react';
import { useDispatch } from 'react-redux';
import { startTodo, rejectTodo, completeTodo } from "./TodoListSlice"
export function TodoItem({ todo, action }) {

    console.log('from DoAction {' + action + '}')
    console.log(todo)
    console.log(action)

    const dispatch = useDispatch();

    const DoAction = (name) => {
        if (action === 'Start') {
            dispatch(startTodo(name));
        }
        if (action === 'Finished') {
            dispatch(completeTodo(name));
        }
        if (action === 'Reject') {
            dispatch(rejectTodo(name));
        }
    };

    return(
        todo && todo.name ?
            <>
                
                    <b>{todo.name}</b>
                    <b>
                        &nbsp;Status: {todo.status}
                        <button onClick={() => DoAction(todo.name)}><span role="img" aria-label="add"><div>{action}</div></span></button>
                    </b>
                
            </> :
            <></>
    );
}
export default TodoItem;