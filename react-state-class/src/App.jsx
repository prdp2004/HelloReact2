import "./App.css";
import LudoBoard from "./LudoBoard";
import ToDoList from "./ToDoList";
import Lottery from "./Lottery";
import TicketNum from "./TicketNum";
 
function App() {

  return (
    <div className="app-shell">
      <ToDoList />
      <LudoBoard />
      <Lottery n={3} winningSum={15} />
      <TicketNum num={5}/>

    </div>
  );
}
export default App;
