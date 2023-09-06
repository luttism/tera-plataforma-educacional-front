/* eslint jsx-a11y/anchor-is-valid:0 */

import React from "react";
import logo from "../../images/logo.png";

export default function Login() {
  return (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <div>
        <label>E-mail:</label>
        <input type="email" className="form-control" />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" className="form-control" />
      </div>
      <button className="button-primary">Entrar</button>
    </div>
  );
}
