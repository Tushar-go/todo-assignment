import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, changeRole } from '../feature/todo/todoSlice'
import Modal from './Modal'

const Todos = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (todo) => {
  // here we are changing role from add to edit so that popup can show up we can edit todos
  // also we are selecting and sending todo that i need to use and edit in modal
    dispatch(changeRole({ role: 'edit', editTodo: todo.text, id: todo.id }));
    setShowModal(true);
  }


  

  return  (
    <div className='flex flex-col items-center my-4 p-4  rounded-md shadow-md'>
      {todos.length <=0 && <h1 className=' text-white text-3xl font-medium'>Add Todos!</h1>  }
      {todos.map((todo) => (
        <div key={todo.id} className='flex gap-4 items-center mb-2 bg-white p-3 rounded-md shadow-sm w-full max-w-md'>
          <span className='text-lg flex-grow font-medium'>{todo.text}</span>
          <div className=' flex flex-row gap-1'>
          <button 
            onClick={() => dispatch(removeTodo(todo.id))} 
            className='bg-red-500 font-bold text-white px-2 py-1 rounded-md hover:bg-red-700'
          >
            X
          </button>
          <button 
            onClick={() => handleEdit(todo)} 
            className='bg-yellow-500 font-bold text-white px-2 py-1 rounded-md hover:bg-yellow-700'
          >
            Edit
          </button>
          </div>
          
        </div>
      ))}
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default Todos
