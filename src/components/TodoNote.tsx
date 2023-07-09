import { RiMore2Fill } from 'react-icons/ri'
import { LuFileSpreadsheet, LuFileEdit} from 'react-icons/lu';
import { TiDocumentDelete} from 'react-icons/ti';
import { Todo } from '../models/Todo'
import { useState } from 'react'

const iconSize: number = 22
const options= [
  {name:'View', icon: <LuFileSpreadsheet size={iconSize}/>}, 
  {name:'Edit', icon: <LuFileEdit size={iconSize}/>}, 
  {name:'Delete', icon: <TiDocumentDelete size={iconSize}/>}
]

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
            <RiMore2Fill size={iconSize}/>
          </button>

          {/* Drop Down Menu */}
          <div className={"absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#D8C4B6] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none " + (isMenuHidden? "hidden": "" )} role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            <ul className="">
              {options.map(option => {
                return (
                <li className="flex justify-between px-4 py-2 rounded-md text-[#213555] text-sm hover:bg-[#4F709C] hover:text-[#D8C4B6]">
                  <span>{option.name}</span>
                   <span>{option.icon}</span>
                </li>
                  )
              })}
            </ul>
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