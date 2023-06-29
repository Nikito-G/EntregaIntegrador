import React, { useEffect, useState } from "react";
import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Navbar/Nav";
import axios from "axios";
import Detail from "./components/Detail/Detail";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  // var characters = [] // ASI NO, como estado

  // const array = useState([]); // Que retorna esta funcion cuando la invoco? --> [ state  , setState ]
  // const state = array[0]
  // const setState = array[1]
  function onSearch(dato) {
    // agrega personajes a characters
    axios(`https://rickandmortyapi.com/api/character/${dato}`)
      .then((respuesta) => {
        if (respuesta.data.name) {
          // antes de agregar busco si "ya existe". Como lo harias?
          // tu codigo aquí:
          // if("yaExiste") return
          setCharacters((oldChars) => [...oldChars, respuesta.data]);
        } else {
        }
      })
      .catch((err) => window.alert("¡No hay personajes con este ID!"));
  }

  function onClose(id) {
    // elimina personajes de characters
    // window.alert("onClose :)")
    setCharacters(
      characters.filter((pj) => {
        return pj.id !== Number(id);
      })
    );
  }

  const [characters, setCharacters] = useState([]); // [{}]

  // const location = useLocation();
  // console.log("location", location);

  // let navigate = useNavigate()
  // function handle(){
  //   navigate("/algo")
  // }

  return (
    <div className={style.App}>
      <Nav onSearch={onSearch} />
      <Routes>
        {/* <Route path="*" element={<Nav onSearch={onSearch} />} /> */}
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<h1>Soy el about</h1>} />
        <Route path="/character/:id/:name" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

// lo que tenemos con axios pero con fetch

// fetch(`https://rickandmortyapi.com/api/character/${dato}`)
// .then(respuesta => respuesta.json())
// .then((respuestaJson) => {
//   if (respuestaJson.name) {
//     setCharacters((oldChars) => [...oldChars, respuestaJson]);
//   } else {
//   }
// })
// .catch((err) => window.alert("¡No hay personajes con este ID!"));
{
  /*
   */
}
