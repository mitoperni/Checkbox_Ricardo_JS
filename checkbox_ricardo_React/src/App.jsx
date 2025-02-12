import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    terms: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData)
  }

  return (
    <>
      <form action="">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <div>
          <label htmlFor="terms">Acepto las condiciones</label>
          <input type="checkbox" name="terms" id="terms" onChange={handleChange}/>
        </div>
      </form>
      <button type="button" id="send">
        Mandar formulario
      </button>
    </>
  );
}

export default App;
