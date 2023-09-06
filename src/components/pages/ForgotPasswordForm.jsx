import React from "react";
import logo from "../../images/logo.png";

export default function ForgotPasswordForm() {
  return (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <div>
        <h2>Esqueceu senha?</h2>
        <label>E-mail:</label>
        <input type="email" className="form-control" />
      </div>
      <button className="button-primary">Enviar</button>
    </div>
  );
}
