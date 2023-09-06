import React from "react";
import logo from "../../images/logo.png";

export default function RegisterForm() {
  return (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <div>
        <h2>Registrar</h2>
        <label>Nome:</label>
        <input type="text" className="form-control" />
      </div>
      <div>
        <label>E-mail:</label>
        <input type="email" className="form-control" />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" className="form-control" />
      </div>
      <div>
        <label>Repetir Senha:</label>
        <input type="password" className="form-control" />
      </div>
      <button className="button-primary">Registrar</button>
    </div>
  );
}
