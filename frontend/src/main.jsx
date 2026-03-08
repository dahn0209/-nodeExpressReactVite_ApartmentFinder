// import { StrictMode, Component } from "react";
// import { createRoot } from "react-dom/client";

// import { BrowserRouter,Routes,Route } from "react-router";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// import IndexPage from "./pages/IndexPage";
// import AboutPage from "./pages/AboutPage";
// import BaseTemplate from "./pages/BaseTemplate";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";

// // import App from './App.jsx'

// // class AppOld extends Component {
// //   render() {
// //     return (
// //       <div>
// //         Hello, React! from 2015
// //       </div>
// //     );
// //   }

// // }

// // function App() {
// //   return (
// //     <div>
// //     Hello, React!
// //     </div>
// //   );
// // }

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(
//   <StrictMode>
//     <BaseTemplate>

//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<IndexPage />} />
//         <Route path="/about" element={<AboutPage />} />
//               {/* <IndexPage />
//       <AboutPage /> */}
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/register" element={<RegisterPage />} />
//       </Routes>

//     </BrowserRouter>
//     </BaseTemplate>
//   </StrictMode>,
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import IndexPage from "./pages/IndexPage.jsx";

import AboutPage from "./pages/AboutPage.jsx";
import BaseTemplate from "./pages/BaseTemplate.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <BaseTemplate>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </BaseTemplate>
  </StrictMode>
);