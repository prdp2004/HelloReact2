import { useState } from "react";

const players = [
  { id: "blue", label: "Blue", color: "#3878e8" },
  { id: "yellow", label: "Yellow", color: "#e7ad28" },
  { id: "green", label: "Green", color: "#30966a" },
  { id: "red", label: "Red", color: "#dc5a54" },
];

export default function LudoBoard() {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  const [history, setHistory] = useState([]);

  function movePlayer(playerId) {
    setMoves((currentMoves) => ({
      ...currentMoves,
      [playerId]: currentMoves[playerId] + 1,
    }));
    setHistory((currentHistory) => [playerId, ...currentHistory]);
  }

  return (
    <section className="ludo-card" aria-labelledby="ludo-heading">
      <p className="eyebrow">State practice</p>
      <h1 id="ludo-heading">Ludo moves</h1>
      <p className="section-copy">Tap a color to record a move.</p>
      <div className="player-grid">
        {players.map((player) => (
          <article className="player-card" key={player.id}>
            <span className="player-dot" style={{ backgroundColor: player.color }} aria-hidden="true" />
            <p className="player-name">{player.label}</p>
            <p className="move-count">{moves[player.id]}</p>
            <button
              className="move-button"
              style={{ "--player-color": player.color }}
              onClick={() => movePlayer(player.id)}
              type="button"
              aria-label={`Record a move for ${player.label}`}
            >
              +1 move
            </button>
          </article>
        ))}
      </div>
      <div className="history" aria-live="polite">
        <h2>Recent moves</h2>
        {history.length === 0 ? (
          <p className="empty-state">No moves yet.</p>
        ) : (
          <ol>
            {history.slice(0, 5).map((playerId, index) => {
              const player = players.find((item) => item.id === playerId);
              return <li key={`${playerId}-${index}`}>{player.label} made a move</li>;
            })}
          </ol>
        )}
      </div>
    </section>
  );
}
