import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useElements } from "../ElementsContext";

//Llistat de Todos
function TodoList() {
  const { arrayServices, services, webOptions } = useElements();

  //Array de Todos que s'aniran afegint
  const [todos, setTodos] = useState([]);

  //N2. Ordenar i buscar per nom
  const [orderBy, setOrderBy] = useState(null);
  const [searchName, setSearchName] = useState("");

  //Calcular el cost total dels serveis i els de web perquè al Todo sigui estàtic
  const calculateTotalForServices = () => {
    return arrayServices.reduce((total, service) => {
      if (services && services[service.name.toLowerCase()]) {
        total += service.price;
      }
      return total;
    }, 0);
  };

  const calculateTotalForWeb = () => {
    return services.web ? (webOptions.pages + webOptions.languages) * 30 : 0;
  };

  //Afegir el Todo quan fem el submit del formulari amb: Serveis seleccionats, cost total, inputs i webOptions. 
  const addTodo = (todo) => {
    const selectedServices = arrayServices
      .filter((service) => services && services[service.name.toLowerCase()])
      .map((service) => service.name);

    const totalServices = calculateTotalForServices();
    const totalWeb = calculateTotalForWeb();

    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      name: todo.name,
      phone: todo.phone,
      email: todo.email,
      services: selectedServices,
      wPages: webOptions.pages,
      wLanguages: webOptions.languages,
      total: totalServices + totalWeb,
      date: new Date(),
    };

    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  };

  //N2. Ordenar segons nom, data o import
  const handleOrderBy = (type) => {
    setOrderBy(type);

    if (type === "name") {
      setTodos([...todos].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (type === "date") {
      setTodos([...todos].sort((a, b) => new Date(b.date) - new Date(a.date)));
    } else if (type === "import") {
      setTodos([...todos].sort((a, b) => b.total - a.total));
    }
  };

  //Buscar Todo segons el nom que escrivim a l'input
  const filterTodos = () => {
    return todos.filter((todo) =>
      todo.name.toLowerCase().includes(searchName.toLowerCase())
    );
  };

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <div className="mx-auto w-3/6 pt-8 border-t-2 border-dashed border-teal-900">
        <h1 className="text-xl">Pressupostos en curs:</h1>
        <div className="flex gap-4 justify-end font-bold">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-info input-sm"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <button onClick={() => handleOrderBy("name")}>Nom</button>
          <button onClick={() => handleOrderBy("date")}>Data</button>
          <button onClick={() => handleOrderBy("import")}>Import 🡫</button>
        </div>
      </div>

      <Todo todos={filterTodos()} />
    </div>
  );
}

export default TodoList;
