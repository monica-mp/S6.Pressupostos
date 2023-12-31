import { useElements } from "../ElementsContext";

//Estructura del Todo: Inputs, serveis seleccionats i cost final.
function Todo({ todos }) {
  const { arrayServices, applyDiscount } = useElements();
  return todos.map((todo) => (
    <div
      key={todo.id}
      className="flex justify-between my-4 border-2 rounded-lg border-gray-700 p-4 w-3/6 mx-auto shadow-md shadow-cyan-950"
    >
      <div className="w-24">
        <h1 className="font-bold">{todo.name}</h1>
        <p>{todo.phone}</p>
        <p>{todo.email}</p>
      </div>
      <div>
        <h2 className="font-bold">Serveis contractats:</h2>
        {todo.services.map((serviceName) => (
          <p key={serviceName}>
            {arrayServices.find((service) => service.name === serviceName).name}
          </p>
        ))}
        {todo.services.includes("Web") && (
          <div>
            <p>
              (Pàgines: {todo.wPages}, Llenguatges: {todo.wLanguages})
            </p>
          </div>
        )}
      </div>
      <div>
        <h2>Total: {applyDiscount ? todo.total * 0.8 : todo.total} &euro;</h2>
      </div>
    </div>
  ));
}

export default Todo;
