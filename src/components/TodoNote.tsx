import { RiMore2Fill } from 'react-icons/ri'
import { Todo } from '../models/Todo'
import { useState } from 'react'

const dotSize = 22

const TodoNote: React.FC<Todo> = ({title, description}) => {
  const [isMenuHidden, setIsMenuHidden] = useState<Boolean>(true)

  const toggleMenu = () => {
    if(isMenuHidden){
      setIsMenuHidden(false)
    }else{
      setIsMenuHidden(true)
    }
  }

  return (
    <div className="text-white w-96 h-72 gap-10 rounded-lg">
      {/* Here comes the header of the Todo note / Title */}
      {/* Add options to the todo to be able to modify it */}
      <div className="flex justify-between font-bold rounded-t-lg p-3 bg-[#D8C4B6] text-[#213555]">
        <h1>{title}</h1>

        {/* Note options */}
        <div className='relative inline-block text-left'>
          <button onClick={ () => toggleMenu()} type='button' id="menu-button" aria-expanded="true" aria-haspopup="true" className='duration-100 ease-in hover:text-[#F5EFE7]'>
            <RiMore2Fill size={dotSize}/>
          </button>

          {/* Drop Down Menu */}
          <div className={"absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none " + (isMenuHidden? "hidden": "" )} role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            <div className="py-1" role="none">
              <a className="text-gray-700 block px-4 py-2 text-sm">View</a>
              <a className="text-gray-700 block px-4 py-2 text-sm">Edit</a>
              <a className="text-gray-700 block px-4 py-2 text-sm">Delete</a>
            </div>
          </div>

        </div>
        

      </div>

      {/* Here comes the body of the todo note/ Description */}
        <div className="bg-[#213555] text-[#D8C4B6] h-full rounded-b-lg p-3">
          {description}
        </div>
    </div>
  )
}

export default TodoNote