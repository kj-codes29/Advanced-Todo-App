import TodoNote from './TodoNote'
import { Todo } from '../models/Todo'

interface TodoNotes {
  todoNotes: Todo[]
}

const TodoList = ({todoNotes}:TodoNotes) => {
  return (
    <div className="bg-[#F5EFE7] grid grid-cols-3 justify-items-center overflow-auto w-screen h-100 p-4 rounded-md">
      
        {todoNotes.map(todoNote => {
            return <TodoNote title={todoNote.title} description={todoNote.description}/>
        })}

      </div>
  )
}

export default TodoList