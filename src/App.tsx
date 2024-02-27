import { useState } from 'react';
import InputField from './components/InputField';
import './css/App.css';
import { Todo } from './model';
import TodoList from "./components/TodoList";
import {DragDropContext, DropResult}  from 'react-beautiful-dnd';
const App: React.FC = () => {

  const [todo, setTodo] = useState<string>(""); //inputField handler
  const [todos, setTodos] = useState<Todo[]>([]); // submitButton handler
  const [completed, setCompleted] = useState<Todo[]>([]); 

  const handAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  }


  const onDragEnd = (result:DropResult) => {
    console.log(result);
    const {source, destination} = result;

    if(!destination) return alert('no space')
    if(destination.droppableId === source.droppableId && destination.index === source.index) return alert('same space')

    let add, 
      active = todos, 
      complete = completed

    if(source.droppableId === 'TodosList'){
      add=active[source.index];
      active.splice(source.index, 1);
    } else {
        add=active[source.index];
        active.splice(source.index, 1);
      
    }

    if(destination.droppableId === 'TodosList'){
      active.splice(destination.index, 0, add)
    } else {
      complete.splice(destination.index, 0, add)
    }

    setCompleted(complete)
    setTodos(active)
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          <span className="heading">Taskify</span>
          <span className="heading">  </span>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handAdd}  />

          <TodoList  
            todos={todos}  
            setTodos={setTodos}
            completedTodos={completed}
            setCompletedTodos={setCompleted}
          />
      </div>
    </DragDropContext>

  );
}

export default App;
