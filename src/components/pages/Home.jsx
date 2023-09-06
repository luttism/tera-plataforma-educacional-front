import React from "react";
import logo from "../../images/logo.png";

export default function Home() {
  return (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <h1>Bem-vindo ao Teramatica</h1>
      <div>
        <div>
          <button className="button-primary">Registrar</button>
          <button className="button-primary">Login</button>
        </div>
      </div>
    </div>
  );
}
