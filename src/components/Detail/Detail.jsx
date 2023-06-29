import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id, name } = useParams();

  return (
    <div>
      <h1>Soy el personaje: {id}</h1>
    </div>
  );
}
