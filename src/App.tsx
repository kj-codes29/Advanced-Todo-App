import { useState } from "react";
import SideBar from "./components/SideBar";
import TodoList from "./components/TodoList";
import { Todo } from "./models/Todo";
import Modal from "./models/Modal";

// This app contains a multiple todo lists
// each list is a components
// the list can be opened and edited
// the list can be deleted
// a new list can be created

function App() {
  const [todoNotes, setTodoNotes] = useState<Todo[]>([]);
  const [isModalHidden, setIsModalHidden] = useState<Boolean>(true);

  const toggleModal = () => {
    setIsModalHidden(!isModalHidden);
  };

  const addTodoNote = (newTodoNote: Todo) => {
    if (todoNotes.length <= 6) {
      setTodoNotes((prevTodoNotes) => [...prevTodoNotes, newTodoNote]);
    }
  };

  const removeTodoNote = (id: string) => {
    const currentNotes = [...todoNotes];
    const updatedNotes = currentNotes.filter((notes) => notes.id != id);
    setTodoNotes(updatedNotes);
  };

  const modalProps: Modal = {isModalHidden, setIsModalHidden, addTodoNote}

  return (
    <div className="flex">
      <SideBar toggleModal={toggleModal} />

      <TodoList todoNotes={todoNotes} removeTodoNote={removeTodoNote} modalProps={modalProps} />
    </div>
  );
}

export default App;
