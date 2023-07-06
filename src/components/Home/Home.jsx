import React from "react";
import Cards from "../Cards/Cards";
import style from "./Home.module.css";

export default function Home(props) {
  return (
    <div className={style.container}>
      <Cards characters={props.characters} onClose={props.onClose} />
    </div>
  );
}
