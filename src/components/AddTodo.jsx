
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/todo/todoSlice'

const AddTodo = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch();

  

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    // This helps to change input back to blank
    setInput("");
  }



  return   (
    <div className='flex flex-col justify-center items-center '>
      <form onSubmit={addTodoHandler} className='flex flex-row  gap-4'>
        <input 
          type="text" 
          onChange={(e) => setInput(e.target.value)} 
          value={input} 
          className='border-2 border-gray-300 p-2 rounded-md w-80 font-medium' 
          placeholder='Add a new task' 
        />
        <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-bold'>
          Add Todo
        </button>
      </form>
    </div>
  ) 
}

export default AddTodo
