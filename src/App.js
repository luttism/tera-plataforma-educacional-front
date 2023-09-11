import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import RegisterForm from "./components/pages/RegisterForm";
import ForgotPasswordForm from "./components/pages/ForgotPasswordForm";
import Courses from "./components/pages/Courses";
import CoursePage from "./components/pages/CoursePage";

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";


function App() {
  //return <Home />;
  //return <Login />;
  //return <RegisterForm />;
  //return <ForgotPasswordForm />;
  //return <Courses />;
  //return <CoursePage />;
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registerform" element={<RegisterForm />} />
    <Route path="/login/forgotpassword" element={<ForgotPasswordForm />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/courses/:courseId" element={<CoursePage />} />
    <Route path="*" element={<h1>Not found!</h1>} />
  </Routes>
  </BrowserRouter>
  );
//   <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="/registerform" element={<RegisterForm />} />
//     <Route path="/login/forgotpassword" element={<ForgotPasswordForm />} />
//     <Route path="/courses" element={<Courses />} />
//     <Route path="/courses/coursepage" element={<CoursePage />} />
//     <Route path="*" element={<h1>Not found!</h1>} />
//   </Routes>
// </BrowserRouter>;
}

export default App;
