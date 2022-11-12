import React from "react";
const Title = (props) => <h1>{props.appName}</h1>;
const Avatar = () => {
  return (
    <img
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
      alt=""
    />
  );
};

const Logo = () => {
  const appName = "Simeon's Pokedex";
  return (
    <header>
      <Title appName={appName} fabulous="true" />
      <Avatar />
    </header>
  );
};

const App = () => {
  return (
    <div>
      <Logo />
    </div>
  );
};

export default App;
