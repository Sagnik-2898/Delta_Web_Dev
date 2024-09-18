/* eslint-disable no-unused-vars */
import { useState } from "react";

import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

const Lottery = ({n=3,winningSum=15}) => {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinning = sum(ticket) === winningSum;
  let buyTicket = ()=>{
    setTicket(genTicket(3));
  }

  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket}/>
      
      <button onClick={buyTicket}>Buy Ticket</button>
      <h3>{isWinning && "Congratulations You Won"}</h3>
      
    </div>
  );
};

export default Lottery;
