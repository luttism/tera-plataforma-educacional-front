/* eslint jsx-a11y/anchor-is-valid:0 */
import React from "react";
import logo from "../../images/logo.png";
import course1 from "../../images/placeholders/course-1.png";
import course2 from "../../images/placeholders/course-2.png";
import course3 from "../../images/placeholders/course-3.png";
import course4 from "../../images/placeholders/course-4.png";

export default function Courses() {
  return (
    <div className="wrapper">
      <div className="app-header">
        <div className="app-header__logo">
          <img src={logo} className="responsive" alt="" />
        </div>
        <div className="app-header__menu">
          <i className="fa fa-bars"></i>
        </div>
      </div>

      <div className="courses">
        <h1>Aritmética básica</h1>

        <div className="courses__list">
          <a href="#" className="courses__list-item">
            <div className="courses__list-item-photo">
              <img src={course1} className="responsive avatar" alt="" />
            </div>
            <div className="courses__list-item-name">Soma</div>
          </a>
          <a href="#" className="courses__list-item">
            <div className="courses__list-item-photo">
              <img src={course2} className="responsive avatar" alt="" />
            </div>
            <div className="courses__list-item-name">Subtração</div>
          </a>
          <a href="#" className="courses__list-item">
            <div className="courses__list-item-photo">
              <img src={course3} className="responsive avatar" alt="" />
            </div>
            <div className="courses__list-item-name">Multiplicação</div>
          </a>
          <a href="#" className="courses__list-item">
            <div className="courses__list-item-photo">
              <img src={course4} className="responsive avatar" alt="" />
            </div>
            <div className="courses__list-item-name">Divisão</div>
          </a>
        </div>
      </div>
    </div>
  );
}
