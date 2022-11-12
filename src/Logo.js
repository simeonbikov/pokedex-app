import React from "react";

const Logo = (props) => {
//   const appName = "Simeon's Pokedex";
// console.log(props);
  return (
    <header>
      <h1>{ props.appName }</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pokedex"
      />
    </header>
  );
};

export default Logo;
