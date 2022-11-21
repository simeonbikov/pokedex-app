import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function logWhenClicked() {
  console.log("Picture was clicked!");
}

const App = () => {
  return (
    <div>
      <Logo appName="Simeon's Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
};

export default App;
