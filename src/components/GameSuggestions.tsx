import "./GameSuggestions.scss";
import GameCard from "./GameCard";

export default function GameSuggestions(props: any) {
  return (
    <div className="game-suggestions">
      <div className="header">
        <h1>Bestsellers</h1>
        <button>Show More</button>
      </div>
      {props.children}
    </div>
  );
}
