/* eslint jsx-a11y/anchor-is-valid:0 */
import React from "react";
import logo from "../../images/logo.png";
import course1 from "../../images/placeholders/course-1.png";
import mathclass1 from "../../images/placeholders/math_class-1.png";
import mathclass2 from "../../images/placeholders/math_class-2.png";
import mathclass3 from "../../images/placeholders/math_class-3.png";

export default function CoursePage() {
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

      <div className="course-page">
        <div className="course-page__header">
          <div className="course-page__header-photo">
            <img src={course1} className="responsive avatar" alt="" />
          </div>
          <h1 className="course-page__header-title">Adição</h1>
          <p className="course-page__header-bio">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="course-page__posts">
          <div className="course-page__posts-item">
            <div className="course-page__posts-item-photo">
              <img src={mathclass1} className="responsive" alt="" />
            </div>
            <h2 className="course-page__posts-item-title">
              Aprendendo a adição ou soma
            </h2>
            <div className="course-page__posts-date">
              Atualizado em 06/06/2022
            </div>
            <div className="course-page__post-content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classNameical Latin literature from 45
              BC, making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classNameical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </div>
          </div>
          <div className="course-page__posts-item">
            <div className="course-page__posts-item-photo">
              <img src={mathclass2} className="responsive" alt="" />
            </div>
            <h2 className="course-page__posts-item-title">
              Princípios da Adição
            </h2>
            <div className="course-page__posts-date">
              Publicado em 14/06/2022
            </div>
            <div className="course-page__post-content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classNameical Latin literature from 45
              BC, making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classNameical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </div>
          </div>
          <div className="course-page__posts-item">
            <div className="course-page__posts-item-photo">
              <img src={mathclass3} className="responsive" alt="" />
            </div>
            <h2 className="course-page__posts-item-title">
              Lista de exercícios de fixação - Adição
            </h2>
            <div className="course-page__posts-date">
              Publicado em 14/06/2022
            </div>
            <div className="course-page__post-content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classNameical Latin literature from 45
              BC, making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classNameical
              literature, discovered the undoubtable source.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
