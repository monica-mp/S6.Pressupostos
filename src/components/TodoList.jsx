import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useCheckbox } from "../CheckboxContext";

function TodoList() {
  const { arrayServices, services, webOptions } = useCheckbox();

  const [todos, setTodos] = useState([]);

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
    };

    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <div className="mx-auto w-3/6 pt-8 border-t-2 border-dashed border-teal-900">
        <h1 className="text-xl">Pressupostos en curs:</h1>
      </div>
      <Todo todos={todos} arrayServices={arrayServices} />
    </div>
  );
}

export default TodoList;
