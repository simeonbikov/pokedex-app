import React from "react";

  // function logWhenClicked() {
  //   console.log("Picture was clicked!");
  // }

const Logo = (props) => {
  return (
    <header>
      <h1>{props.appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pokedex"
        onClick={props.handleClick}
      />
    </header>
  );
};


export default Logo;
