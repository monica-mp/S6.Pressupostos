import "./App.css";
import { Link } from "react-router-dom";
import ElementsProvider from "./ElementsContext.jsx";
import Checkbox from "./components/Checkbox.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  return (
    <ElementsProvider>
      <Link to="/">
        <button className="btn btn-outline btn-info btn-sm m-2">
          Ves a Home
        </button>
      </Link>
      <Checkbox />
      <TodoList />
    </ElementsProvider>
  );
}

export default App;
