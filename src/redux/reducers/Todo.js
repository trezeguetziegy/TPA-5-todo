import { createSlice } from '@reduxjs/toolkit'

export const Todo = createSlice({
    name: 'counter',
    initialState: {
        TodoList: []
    },
    reducers: {
        createTodoList: (state, action) => {
            state.TodoList.push(action.payload)
        },

        deleteTodoList: (state, action) => {
            state.TodoList = action.payload
        },

        addCheckListTodoList: (state, action) => {
            state.TodoList = action.payload
        },

        updateTodoList: (state, action) => {
            state.TodoList = action.payload
        }
    }
})

export const { createTodoList, deleteTodoList, addCheckListTodoList, updateTodoList } = Todo.actions

export default Todo.reducer