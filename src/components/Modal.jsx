import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTodo, changeRole } from '../feature/todo/todoSlice'

const Modal = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  // using useSelector we can get the values of state that is todo
  const todo = useSelector(state => state.editTodo)
  const id = useSelector(state => state.id)
  // here we are setting default usestate edit value 
  const [input, setInput] = useState(todo)

  useEffect(() => {
    // here we checking showmodal must be true to add previous todo input everytime showmodal and todo value changes
    if (showModal) {
      setInput(todo)
    }
  }, [showModal, todo])

  const handleUpdate = (e) => {
    e.preventDefault();
    // here we are sending updated todo and id to the global todo state
    dispatch(updateTodo({
      text: input,
      id: id
    }))
    // seting show modal false after updation so that it can close
    setShowModal(false);
    // here changing role back to add todo 
    dispatch(changeRole({ role: 'add', editTodo: '', id: null }));
  }

  return (
    showModal ? (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-5 rounded-md shadow-md">
          <h2 className="text-2xl mb-4 ">Edit Todo</h2>
          <form onSubmit={handleUpdate} className="flex flex-col gap-4">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              className="border-2 border-gray-300 p-2 rounded-md" 
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-bold">
              Update Todo
            </button>
          </form>
          <button onClick={() => setShowModal(false)} className="mt-4 text-red-500 hover:underline">
            Close
          </button>
        </div>
      </div>
    ) : null
  )
}

export default Modal
