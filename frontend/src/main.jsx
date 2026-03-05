import { StrictMode, Component } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import IndexPage from "./components/pages/IndexPage";
import "bootstrap/dist/css/bootstrap.min.css";

// import App from './App.jsx'

// class AppOld extends Component {
//   render() {
//     return (
//       <div>
//         Hello, React! from 2015
//       </div>
//     );
//   }

// }

// function App() {
//   return (
//     <div>
//     Hello, React!
//     </div>
//   );
// }

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <IndexPage />
  </StrictMode>,
);
