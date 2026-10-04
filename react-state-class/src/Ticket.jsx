import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ ticket = [] }) {
  return (
    <div className="Ticket" aria-label={`Ticket numbers: ${ticket.join(", ")}`}>
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      ))}
    </div>
  );
}
