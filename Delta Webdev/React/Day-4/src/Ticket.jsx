import "./Ticket.css"

import TicketNum from "./TicketNum"
const Ticket = ({ticket}) => {
  return (
    <>
    <p>Ticket</p>
    <div className="Ticket">
        
      {ticket.map((num,idx)=>(
        <TicketNum num={num} key={idx}/>))}
    </div>
    </>
  )
}

export default Ticket
