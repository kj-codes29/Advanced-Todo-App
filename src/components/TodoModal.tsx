import { useRef } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Todo } from "../models/Todo";

type modalProps = {
    isModalHidden: Boolean,
    setIsModalHidden: any
    addTodoNote: any
}

const inputStyle = "bg-gray-600 border border-gray-500 text-gray-900 placeholder-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
const labelStyle = "block mb-2 text-sm font-medium text-white"

const TodoModal = ({isModalHidden, setIsModalHidden, addTodoNote}: modalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const hideModal = () => {
        if(!isModalHidden){
            setIsModalHidden(true)
        }
    }

    // close dropdown when clicked anywhere
  document.addEventListener('mousedown', (e: MouseEvent) => {
    if(modalRef.current && !modalRef.current.contains(e.target as Node)){
      hideModal()
    }
  })

  const createNote = (todoContent: Todo) => {
    addTodoNote(todoContent)
    hideModal()
  }

  return (

<div id="authentication-modal" aria-hidden="true" className={"absolute w-full bg-gray-700/50 p-4 h-full " + (isModalHidden? "hidden":"")}>
    <div ref={modalRef} className="translate-y-1/2 translate-x-full w-full max-w-md max-h-full z-10">

        {/* <!-- Modal content --> */}
        <div className="relative bg-gray-700 rounded-lg shadow">

            {/* Close mode button */}
            <button onClick={() => hideModal()} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            {/* --------- */}

            <div className="px-6 py-6">
                <h3 className="mb-4 text-xl font-medium text-white">Create Todo Note</h3>

                {/* create from */}
                <div className="space-y-6">
                    <div>
                        <label className={labelStyle}>Title</label>
                        <input type="text" name="title" className={inputStyle} placeholder="My new note" required/>
                    </div>
                    <div>
                        <label className={labelStyle}>Description</label>
                        <input type="text" name="description" placeholder="Some description" className={inputStyle}/>
                    </div>
                    <button onClick={() => createNote({id: uuidv4(), title: 'This is the title', description: "some stuff"})} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create Note</button>
                </div>
                {/* ------ */}
            </div>
        </div>
    </div>
</div> 

  )
}

export default TodoModal