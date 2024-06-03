// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaHome } from "react-icons/fa";

function Homepage() {
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <FaHome size={20} color="white" />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "15px" }}
      >
        <h1>Bienvenido a Happy Cake</h1>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "15px" }}
      >
        <p>El lugar de los pasteles felices</p>
      </div>
    </>
  );
}

export default Homepage;
