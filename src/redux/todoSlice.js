import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers:{
        addTodo:(state,action) =>{
            const newTodo ={
                id:crypto.randomUUID(),
                title: action.payload.title
            };
            state.push(newTodo);
        },
        deleteTodo:(state,action) =>{
            return state.filter((todo) => todo.id !== action.payload.id);
        }
    }
});

export const {addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;