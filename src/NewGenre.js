import React, { useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

const NewGenre = () => {
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const onChange = event => {
    setName(event.target.value);
  };

  const save = () => {
    axios
      .post("/api/genres", {
        name
      })
      .then(res => {
        setSuccess(true);
      });
  };

  if (success) {
    return <Redirect to="/generos" />;
  }
  return (
    <div className="container">
      <h1>Novo Gênero</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            value={name}
            onChange={onChange}
            type="text"
            className="form-control"
            id="name"
            placeholder="Nome do Gênero"
          />
        </div>
        <button
          type="button"
          onClick={save}
          className="btn btn-outline-success"
        >
          Salvar
        </button>
        <Link to="/generos/" className="btn btn-outline-primary">
          {" "}
          Voltar
        </Link>
      </form>
    </div>
  );
};

export default NewGenre;
