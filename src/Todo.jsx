import {useState} from "react";
import logo from './logo.svg';
import './Todo.css';

function Todo() {
  const [task, setTask] = useState("");

  const handleInputTask = (event) => {
    let inputTask = event.target.value;
    setTask(inputTask)
  }
  return (
    <div className="Todo-wraper">
      <h1>To Do List</h1>
        <form>
          <input type="text" placeholder="Adicione uma tarefa" onChange={(e) => handleInputTask(e)}/>
          <button type="submit">Adicionar</button>
        </form>
        <ul>
          <li>{task}</li>
        </ul>
    </div>
  );
}

export default Todo;
