import { useState } from "react"

const Todolist = () => {
    let [todos,setTodos] = useState(["sample"])
    let [newTodo,setnewtodo] = useState([""])

    let addnewTask = () => {
        setTodos([...todos,newTodo])
    }
    let updatenewTodo = (event) =>{
        setnewtodo(event.target.value)
    }
  return (
    <div>
        <input placeholder="add a task" value={newTodo} onChange={updatenewTodo}></input>
        <br></br>
        <button onClick={addnewTask}>Add</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
      <h3>To Do List</h3>
      <ul>{
        todos.map((todo)=>(
            <li>{todo}</li>
        ))
        }</ul>
    </div>
  )
}

export default Todolist
