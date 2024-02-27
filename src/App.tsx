import { useState } from 'react';
import InputField from './components/InputField';
import './css/App.css';
import { Todo } from './model';
import TodoList from "./components/TodoList";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>(""); //inputField handler
  const [todos, setTodos] = useState<Todo[]>([]); // submitButton handler
  const handAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  }

  console.log(todos)

  return (
    <div className="App">
        <span className="heading">Taskify</span>
        <span className="heading">  </span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handAdd}  />

        <TodoList  todos={todos}  setTodos={setTodos} />
    </div>
  );
}

export default App;
