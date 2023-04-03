import { useState } from "react";
import "./App.scss";
import GameCard from "./components/GameCard";
import MetaRating from "./components/sub/MetaRating";
interface Props {
  char?: string;
}

function App(props: Props) {
  return (
    <>
      <GameCard />
      <MetaRating />
    </>
  );
}

export default App;
