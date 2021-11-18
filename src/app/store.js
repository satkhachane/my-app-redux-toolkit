import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import birdsCountReducer from '../features/BirdsCount/birdsCountSlice';
import todoListReducer from '../features/Todo/TodoListSlice';

export const store = configureStore({
  reducer: {
    birdsCount: birdsCountReducer,
    counter: counterReducer,
    todoList: todoListReducer,
  },
});
