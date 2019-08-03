import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

const EditGenre = ({ match }) => {
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios.get("/api/genres/" + match.params.id).then(res => {
      setName(res.data.name);
    });
  }, [match.params.id]);

  const onChange = event => {
    setName(event.target.value);
  };

  const save = () => {
    axios
      .put("/api/genres/" + match.params.id, {
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
      <h1>Editar Gênero</h1>
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
          className="btn btn-outline-success btn-sm"
        >
          Salvar
        </button>
        <Link to="/generos/" className="btn btn-outline-primary btn-sm">
          {" "}
          Voltar
        </Link>
      </form>
    </div>
  );
};

export default EditGenre;
