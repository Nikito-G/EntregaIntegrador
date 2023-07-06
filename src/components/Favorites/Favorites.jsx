import style from "./Favorites.module.css";
import { connect, useSelector } from "react-redux";
import Card from "../Cards/Singular/Card";

export default function Favorites() {
  // WARNING PELIGRO
  // CUIDADO!!!!
  // USE SELECTOR NO SE PERMITE EN EL CHECKPOINT
  const favorites = useSelector((state) => state.favorites); // ACLARACION
  
  return (
    <div className={style.container}>
      {favorites?.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          species={char.species}
          gender={char.gender}
          status={char.status}
          image={char.image}
          origin={char.origin.name}
        />
      ))}
    </div>
  );
}
