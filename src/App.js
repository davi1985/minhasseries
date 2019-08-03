import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Genres from "./Genres";
import NewGenre from "./NewGenre";
import EditGenre from "./EditGenre";

const Home = () => {
  return <h2>Home</h2>;
};

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("/api").then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/generos/edit/:id" exact component={EditGenre} />
        <Route path="/generos/novogenero" exact component={NewGenre} />
        <Route path="/generos" exact component={Genres} />
        {/* <pre>{JSON.stringify(data)}</pre> */}
      </div>
    </Router>
  );
}

export default App;
