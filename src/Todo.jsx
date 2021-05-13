import logo from './logo.svg';
import './Todo.css';

function Todo() {
  const handleInputTask = (event) => {
    console.log(event);
    let inputTask = event.target.value;
    console.log(inputTask);
  }
  return (
    <div className="Todo-wraper">
      <h1>To Do List</h1>
        <form>
          <input type="text" placeholder="Adicione uma tarefa" onChange={(e) => handleInputTask(e)}/>
          <button type="submit">Adicionar</button>
        </form>
        <ul>
          <li>Item</li>
        </ul>
    </div>
  );
}

export default Todo;
