import TodoNote from './TodoNote'
import { Todo } from '../models/Todo'

type TodoNoteProps = {
  todoNotes: Todo[]
  removeTodoNote: any
}

const TodoList = ({todoNotes, removeTodoNote}:TodoNoteProps) => {
  return (
    <div className="relative bg-[#F5EFE7] grid grid-cols-3 justify-items-center overflow-auto w-screen h-100 p-4 rounded-md">
      
        {todoNotes.map((todoNote)=> {
            return <TodoNote key={todoNote.id} todoInfo={todoNote} remove={removeTodoNote}/>
        })}
      </div>
  )
}

export default TodoList