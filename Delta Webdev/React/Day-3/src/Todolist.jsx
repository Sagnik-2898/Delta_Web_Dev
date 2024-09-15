import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todolist = () => {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone:false }]);
  let [newTodo, setnewTodo] = useState("");

  let addnewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setnewTodo("");
  };
  let updatenewTodo = (event) => {
    setnewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodos(() => todos.filter((prev) => prev.id != id));
  };

  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone:true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone:true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updatenewTodo}
      ></input>
      <br></br>
      <button onClick={addnewTask}>Add</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <h3>To Do List</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
          </li>
        ))}
      </ul>
      <button onClick={markAllDone}>Mark All As Done</button>
    </div>
  );
};

export default Todolist;
