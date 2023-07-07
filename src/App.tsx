import SideBar from "./components/SideBar";
import TodoList from "./components/TodoList";

// This app contains a multiple todo lists
// each list is a components
// the list can be opened and edited
// the list can be deleted
// a new list can be created

function App() {
  return (
    <div className="flex">
      <SideBar />

      <TodoList/>
    </div>
  );
}

export default App;
