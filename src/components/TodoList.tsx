import TodoNote from "./TodoNote";
import { Todo } from "../models/Todo";
import Modal from "../models/Modal";
import TodoModal from "./TodoModal";

type TodoListProps = {
  todoNotes: Todo[];
  removeTodoNote: any;
  modalProps: Modal;
};

const TodoList = ({ todoNotes, removeTodoNote, modalProps }: TodoListProps) => {
  return (
    <div className="relative bg-[#F5EFE7] grid grid-cols-3 justify-items-center overflow-auto w-screen h-100 p-4">
      {todoNotes.map((todoNote) => {
        return (
          <TodoNote
            key={todoNote.id}
            todoInfo={todoNote}
            remove={removeTodoNote}
          />
        );
      })}

      <TodoModal
        addTodoNote={modalProps.addTodoNote}
        isModalHidden={modalProps.isModalHidden}
        setIsModalHidden={modalProps.setIsModalHidden}
      />
    </div>
  );
};

export default TodoList;
