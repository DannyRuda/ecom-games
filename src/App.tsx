import { useState } from "react";
import "./App.scss";
import GameCard from "./components/GameCard";
import MetaRating from "./components/sub/MetaRating";
import GameSuggestions from "./components/GameSuggestions";
interface Props {
  char?: string;
}

function App(props: Props) {
  return (
    <>
      <MetaRating />
      <GameSuggestions>
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      </GameSuggestions>
    </>
  );
}

export default App;
