import React from "react";
import "./CharacterSeccion.css";
import TextoConEstilo from "./TextoConEstilo";

const CharacterSeccion = ({ personaje }) => {
  return (
    <>
      <img className="imagen" src={personaje.image} alt={`avatar de ${personaje.name}`} />
      <div className="descripcion">
        <h2>{personaje.name}</h2>
        <p>
          Estatus-<TextoConEstilo texto={personaje.status} />
        </p>
      </div>
    </>
  );
};

export default CharacterSeccion;