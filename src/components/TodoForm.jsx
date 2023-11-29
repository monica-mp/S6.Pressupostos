import { useState } from "react";

//Formulari inputs nom, telèfon, email
function TodoForm({ onSubmit }) {

  //Definir tres variables d'estat (inputName, inputPhone, inputEmail) i les seves funcions per actualitzar els seus estats
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  //Agafa un event (e) i una funció d'actualització d'estat. Quan cridem la funció, actualitzem l'estat corresponent amb el valor del camp d'entrada  
  const handleInputChange = (e, setInputFunction) => {
    setInputFunction(e.target.value);
  };

  /*Funció que s'executa quan enviem el formulari:
   - Prevenim comportament predeterminat del formulari.
   - Cridem a la funció onSubmit, passant un objecte amb ID generat aleatoriament i els valors dels camps d'entrada
   - Fem reset als camps d'entrada.*/

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