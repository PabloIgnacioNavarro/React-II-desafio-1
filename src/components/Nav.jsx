// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

function Nav() {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "15px",
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "flex start",
          padding: "15px",
        }}
      >
        <FaHome size={30} color="white" />
        <Link to="/Home">Home</Link>
        <IoIosContact size={30} color="white" />
        <Link to="/Contacto">Contacto</Link>
      </div>
    </>
  );
}

export default Nav;
