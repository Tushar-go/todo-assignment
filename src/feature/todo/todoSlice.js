import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    role:"add",
    editTodo:"",
    id:null
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            
            const todo={
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo) 
        },
        removeTodo:(state,action)=>{
            const id=action.payload;
            state.todos=state.todos.filter((todo)=>todo.id!==id);
        },
        changeRole:(state,action)=>{
            state.role=action.payload.role;
            state.editTodo=action.payload.editTodo;
            state.id=action.payload.id;
        },
        updateTodo:(state,action)=>{
            const {id,text}=action.payload;
            state.todos.find((todo)=>todo.id===id).text=text;
            state.role="add"
            state.todo=""
        }
    }
})

export const {addTodo,removeTodo,changeRole,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;