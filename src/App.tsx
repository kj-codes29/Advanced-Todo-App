import { useState } from "react";
import SideBar from "./components/SideBar";
import TodoList from "./components/TodoList";
import { Todo } from "./models/Todo";
import TodoModal from "./components/TodoModal";

// This app contains a multiple todo lists
// each list is a components
// the list can be opened and edited
// the list can be deleted
// a new list can be created

function App() {
  const [todoNotes, setTodoNotes] = useState<Todo[]>([]);
  const [isModalHidden, setIsModalHidden] = useState<Boolean>(false);

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

  return (
    <div className="flex">
      <SideBar toggleModal={toggleModal} />

      <TodoList todoNotes={todoNotes} removeTodoNote={removeTodoNote} />

      <TodoModal addTodoNote={addTodoNote} isModalHidden={isModalHidden} setIsModalHidden={setIsModalHidden}/>
    </div>
  );
}

export default App;
