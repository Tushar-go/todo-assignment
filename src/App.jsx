import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {


  return (
   <div className=' bg-blue-950 flex flex-col items-center justify-center gap-10 min-h-screen w-full'>
    <AddTodo />
    <Todos />
   </div>
  )
}

export default App
