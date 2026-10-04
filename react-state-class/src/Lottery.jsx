import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket.jsx";
import Button from "./Button.jsx";

export default function Lottery({ n = 3, winningSum = 15 }) {
  const [ticket, setTicket] = useState(() => genTicket(n));
  const isWinning = sum(ticket) === winningSum;

  function buyTicket() {
    setTicket(genTicket(n));
  }

  return (
    <section className="lottery" aria-labelledby="lottery-heading">
      <h1 id="lottery-heading">Lottery Game</h1>
      <Ticket ticket={ticket} />
      <Button onClick={buyTicket}>Buy New Ticket</Button>
      <h3 aria-live="polite">{isWinning ? "Congratulations! You won!" : "Try again!"}</h3>
    </section>
  );
}
