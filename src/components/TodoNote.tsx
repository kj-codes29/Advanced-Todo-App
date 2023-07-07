import { RiMore2Fill } from 'react-icons/ri'
import { Todo } from '../models/Todo'

const TodoNote: React.FC<Todo> = ({title, description}) => {
  return (
    <div className="text-white w-96 h-72 gap-10 rounded-lg">
      {/* Here comes the header of the Todo note / Title */}
      {/* Add options to the todo to be able to modify it */}
      <div className="flex justify-between font-bold rounded-t-lg p-3 bg-[#D8C4B6] text-[#213555]">
        <h1>{title}</h1>

        <RiMore2Fill size={22}/>
      </div>

      {/* Here comes the body of the todo note/ Description */}
        <div className="bg-[#213555] text-[#D8C4B6] h-full rounded-b-lg p-3">
          {description}
        </div>
    </div>
  )
}

export default TodoNote