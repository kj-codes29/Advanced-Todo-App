import { useState } from "react";
import SideBar from "./components/SideBar";
import TodoList from "./components/TodoList";
import { Todo } from "./models/Todo";

// This app contains a multiple todo lists
// each list is a components
// the list can be opened and edited
// the list can be deleted
// a new list can be created

function App() {
  const [todoNotes, setTodoNotes] = useState<Todo[]>([]);

  const addTodoNote = (newTodoNote: Todo) => {
    if (todoNotes.length <= 6) {
      setTodoNotes((prevTodoNotes) => [...prevTodoNotes, newTodoNote]);
    }
  };

  return (
    <div className="flex">
      <SideBar addTodoNote={addTodoNote} />

      <TodoList todoNotes={todoNotes} />
    </div>
  );
}

export default App;
