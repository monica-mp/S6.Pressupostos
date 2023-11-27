import { useState } from "react";

function TodoForm({ onSubmit }) {
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const handleInputChange = (e, setInputFunction) => {
    setInputFunction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: inputName,
      phone: inputPhone,
      email: inputEmail,
      
    });

    setInputName("");
    setInputPhone("");
    setInputEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto my-20 px-10 border-2 rounded-lg border-gray-700 w-3/6 shadow-md shadow-cyan-950"
    >
      <h1 className="font-semibold mt-10 text-xl">Demanar pressupost</h1>
      <div className="flex my-8 justify-between">
        <input
          type="text"
          placeholder="Nom"
          value={inputName}
          onChange={(e) => handleInputChange(e, setInputName)}
          className="input input-sm input-bordered input-info "
        />
        <input
          type="number"
          placeholder="Telèfon"
          value={inputPhone}
          onChange={(e) => handleInputChange(e, setInputPhone)}
          className="input input-sm input-bordered input-info"
        />
        <input
          type="email"
          placeholder="Email"
          value={inputEmail}
          onChange={(e) => handleInputChange(e, setInputEmail)}
          className="input input-sm input-bordered input-info"
        />
        <button className="btn btn-sm rounded-full btn-outline btn-info ">
          Sol·licitar pressupost
        </button>
      </div>
    </form>
  );
}

export default TodoForm;