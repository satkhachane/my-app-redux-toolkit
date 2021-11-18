import { createSlice } from '@reduxjs/toolkit';

const initialState =
{
    Todos: [
        {
            name: 'Stop Alarm',
            status: 'COMPLETE'
        },
        {
            name: 'Get up',
            status: 'TODO'
        },
        {
            name: 'Brush Teeth',
            status: 'INPROGRESS'
        },
    ]
};

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addTodo: (state, action) => {
           console.log("Action Type")
            console.log(action.type)
            console.log("Action Payload")
            console.log(action.payload)

            state.Todos.push({ name: action.payload, status: 'TODO' });

            //state.birdsCount.Birds.push({name:action,views:0})
            console.log("before append")

        },
        startTodo: (state, action) => {
            console.log(action)
            let todo = state.Todos.find(item => item.name === action.payload);
            todo.status ='INPROGRESS';
            console.log(todo.status)

        },
        completeTodo: (state, action) => {
            console.log(action)
            let todo = state.Todos.find(item => item.name === action.payload);
            todo.status ='COMPLETE';
            console.log(todo.status)

        },
        rejectTodo: (state, action) => {
            console.log(action)
            let todo = state.Todos.find(item => item.name === action.payload);
            todo.status ='TODO';
            console.log(todo.status)

        },
    },
});

export const { addTodo, startTodo,completeTodo,rejectTodo } = todoListSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTodosAll = (state) =>
{
    console.log('complete state')
    console.log(state)
    return state.todoList.Todos;
}
export const selectTodos = (state) => state.todoList.Todos.filter(item=>item.status=='TODO');
export const selectTodosInProgress = (state) => state.todoList.Todos.filter(item=>item.status=='INPROGRESS');
export const selectTodosCompleted = (state) => state.todoList.Todos.filter(item=>item.status=='COMPLETE');
export default todoListSlice.reducer;