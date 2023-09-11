import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <h1>Bem-vindo ao Teramatica</h1>
      <div>
        <div>
          <button
            onClick={() => navigate(`/registerform`)}
            className="button-primary"
          >
            Registrar
          </button>
          <button onClick={() => navigate(`/login`)} className="button-primary">
            Login
          </button>
          <button
            onClick={() => navigate(`/courses`)}
            className="button-primary"
          >
            Cursos
          </button>
        </div>
      </div>
    </div>
  );
}
