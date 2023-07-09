import { RiMore2Fill } from 'react-icons/ri'
import { LuFileSpreadsheet, LuFileEdit} from 'react-icons/lu';
import { TiDocumentDelete} from 'react-icons/ti';
import { Todo } from '../models/Todo'
import { useRef, useState } from 'react'

const iconSize: number = 22
const options= [
  {name:'View', icon: <LuFileSpreadsheet size={iconSize}/>}, 
  {name:'Edit', icon: <LuFileEdit size={iconSize}/>}, 
  {name:'Delete', icon: <TiDocumentDelete size={iconSize}/>}
]

type TodoProps = {
  todoInfo: Todo,
  remove: any
}

// When clicked on view note it pops up to the front
// the Icon changes to an X
// When clicked on the X Icon it returns to normal
// When it is poped in front it can be edited

// use content editable to edit notes

const TodoNote = ({todoInfo, remove}: TodoProps) => {
  const [isViewMode, setIsViewMode] = useState<Boolean>(false)
  const [isMenuHidden, setIsMenuHidden] = useState<Boolean>(true)
  const dropDownRef = useRef<HTMLDivElement>(null);


  const toggleMenu = () => {
    setIsMenuHidden(!isMenuHidden)
  }

  // close dropdown when clicked anywhere
  document.addEventListener('mousedown', (e: MouseEvent) => {
    if(dropDownRef.current && !dropDownRef.current.contains(e.target as Node)){
      setIsMenuHidden(true)
    }
  })

  // check operation before executing
  const noteOperation = (name: string, id: string) => {
    switch (name){
      case 'Delete': remove(id);
      break;
      case 'Edit': setIsViewMode(!isViewMode)
      break;
      default: console.log('View Mode') 
    }
  }

  return (
    <div className="w-96 h-72 gap-10 rounded-lg">
      {/* Here comes the header of the Todo note / Title */}
      {/* Add options to the todo to be able to modify it */}
      <div className={`flex justify-between font-bold rounded-t-lg p-3 bg-[#D8C4B6] ${isViewMode? "text-red-200" : "text-[#213555]"}`}>
        <h1>{todoInfo.title}</h1>

        {/* Note options */}
        <div ref={dropDownRef} className='relative inline-block text-left'>
          <button onClick={ () => toggleMenu()} type='button' id="menu-button" aria-expanded="true" aria-haspopup="true" className='duration-100 ease-in hover:text-[#F5EFE7]'>
            <RiMore2Fill size={iconSize}/>
          </button>

          {/* Drop Down Menu */}
          <div className={`absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#D8C4B6] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isMenuHidden? "hidden": ""}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            <ul className="">
              {options.map((option, operationIndex) => {
                return (
                <li onClick={ () => noteOperation(option.name, todoInfo.id)} key={operationIndex} 
                    className="flex justify-between px-4 py-2 rounded-md text-[#213555] text-sm hover:bg-[#4F709C] hover:text-[#D8C4B6] hover:cursor-pointer">
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
          {todoInfo.description}
        </div>
    </div>
  )
}

export default TodoNote