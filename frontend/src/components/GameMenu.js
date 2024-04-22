import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const GameMenu = (props) => {
  let navigate = useNavigate();
  return (
    <div className="vh-100">
      <Header/>
      <div className="montserrat-font d-flex justify-content-center align-items-center text-center bg-warning vh-88">
        <div className="d-flex justify-content-center align-items-center text-center row gy-3">
          <h1 className="main-font display-1 m-0 text-dark" >MechanoRacer</h1>
          <button
            type="button"
            onClick={() => navigate("/game/create")}
            className="btn btn-dark btn-lg shadow"
            style={{ cursor: "pointer" }}
          >
            Crear partida
          </button>

          <button
            type="button"
            onClick={() => navigate("/game/join")}
            className="btn btn-dark btn-lg shadow"
          >
            Unirse con código
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default GameMenu;
