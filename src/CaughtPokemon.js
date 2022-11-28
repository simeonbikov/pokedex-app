import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  // let namesArr = ["Squirtle", "Pikachu", "Bulbasaur", "Charizard", "Geodude"];

  // function generateRandomNum() {
  //   return Math.floor(Math.random() * 5);
  // }

  // function catchPokemon() {
  //   setCaught((caught) => {
  //     return caught + 1;
  //   });
  // }

  function catchPokemon() {
    // setCaught(caught.concat(namesArr[generateRandomNum()]));
    setCaught(caught.concat(pokemonNameInput));
    setPokemonNameInput("");
  }

  // function handleInputChange(event) {
  //   setPokemonNameInput(event.target.value);
  // }

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        // onChange={handleInputChange}
        onChange={(event) => setPokemonNameInput(event.target.value)}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caught.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
