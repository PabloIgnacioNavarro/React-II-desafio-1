import "./App.css";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import Contacto from "./components/Contacto";
import { Routes, Route } from "react-router-dom";
import cake from "./assets/img/cake-2369978_640.jpg";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="*" element={<h1>No se encontró esta página</h1>} />
      </Routes>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <img src={cake} />
      </div>
    </>
  );
}

export default App;
