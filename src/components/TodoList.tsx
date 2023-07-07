import { JSX } from 'react/jsx-runtime'
import TodoNote from './TodoNote'

const notes: JSX.Element[] = []

for (let i = 0; i < 6; i++){
    notes.push(<TodoNote/>)
}

const TodoList = () => {
  return (
    <div className="bg-[#F5EFE7] grid grid-cols-3 justify-items-center overflow-auto w-screen h-100 p-4 rounded-md">
        {notes.map(note => {
            return note
        })}
      </div>
  )
}

export default TodoList