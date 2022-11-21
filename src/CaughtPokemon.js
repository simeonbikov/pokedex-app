import React, { useState } from "react";

const CaughtPokemon = (props) => {
  // console.log(useState);

  // const [caught, setCaught] = useState(0);
  const [caught, setCaught] = useState([]);

  let namesArr = ["Squirtle", "Pikachu", "Bulbasaur", "Charizard", "Geodude"];

  function generateRandomNum() {
    return Math.floor(Math.random() * 5);
  }

  // function catchPokemon() {
  //   setCaught((caught) => {
  //     return caught + 1;
  //   });
  // }

  function catchPokemon() {
    setCaught(caught.concat(namesArr[generateRandomNum()]));
  }

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
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