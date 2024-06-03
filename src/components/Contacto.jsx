// eslint-disable-next-line no-unused-vars
import React from "react";

function Contacto() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "15px",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
        <p>Correo:</p>
        <input type="" value="name@example.com" />
        <p>Descripción</p>
        <input type="" value="" />
        <button>Enviar</button>
      </div>
    </>
  );
}

export default Contacto;
