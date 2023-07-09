import TodoNote from './TodoNote'
import { Todo } from '../models/Todo'

interface TodoNotes {
  todoNotes: Todo[]
  removeTodoNote: any
}

const TodoList = ({todoNotes, removeTodoNote}:TodoNotes) => {
  return (
    <div className="bg-[#F5EFE7] grid grid-cols-3 justify-items-center overflow-auto w-screen h-100 p-4 rounded-md">
      
        {todoNotes.map((todoNote, index)=> {
            return <TodoNote key={index} todoInfo={todoNote} todoIndex={index} remove={removeTodoNote}/>
        })}

      </div>
  )
}

export default TodoList