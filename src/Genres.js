import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Genres = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/genres").then(res => {
      setData(res.data.data);
    });
  }, []);

  if (data.length === 0) {
    return (
      <div className="container">
        <h1>Gêneros</h1>
        <div className="alert alert-warning" role="alert">
          Você não possue GÊNEROS criados
        </div>
      </div>
    );
  }

  const deleteGenre = id => {
    axios.delete("/api/genres/" + id).then(res => {
      const filteredData = data.filter(item => item.id !== id);
      setData(filteredData);
    });
  };

  const renderRow = record => {
    return (
      <tr key={record.id}>
        <th scope="row">{record.id}</th>
        <td>{record.name}</td>
        <td>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => deleteGenre(record.id)}
          >
            Remover
          </button>
          <Link
            to={"/generos/edit/" + record.id}
            className="btn btn-outline-warning btn-sm"
          >
            Editar
          </Link>
        </td>
      </tr>
    );
  };

  return (
    <div className="container">
      <h1>Gêneros</h1>
      <div>
        <Link
          to="/generos/novogenero"
          className="btn btn-outline-primary btn-sm"
        >
          Novo Gênero
        </Link>
      </div>
      <div className="center">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>{data.map(renderRow)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Genres;
