import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import { MdEdit, MdDelete, MdDone } from "react-icons/md";
import "./styles.css"
import { Draggable } from 'react-beautiful-dnd';

type Props = {
    todo: Todo;
    todos: Todo[],
    index: number;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos, index}: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        setTodos(todos.map((todo ) => todo.id === id?{...todo, isDone:!todo.isDone} : todo))
    }
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo)=> todo.id !== id))
    }

    const handleEdit = (e:React.FormEvent, id:number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo)=>(
                todo.id === id ? {...todo, todo:editTodo} : todo
            ))
        )
        setEdit(false)
    }
    const focusWhenEdit = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        focusWhenEdit.current?.focus()
    },[edit])


    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {(provided, snapshot) => (
                <form  
                    className={`todos__single ${snapshot.isDragging ? 'drag' : ''}`}
                    onSubmit={(e)=>handleEdit(e,todo.id)}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    >
                    {
                        edit ? (
                            <input  
                                value={editTodo}  
                                onChange={(e)=>setEditTodo(e.target.value)}
                                className='todos__single__text'
                                ref={focusWhenEdit}
                            />
                        ) : (
                            todo.isDone ? (
                                <s className="todos__single__text">{todo.todo}</s>
                            ): (
                                <span className="todos__single__text">{todo.todo}</span>
                            )
                        )
                        
                    }
                    
                        <div>
                            <span 
                                className="icon"
                                onClick={ ()=> { 
                                    if(!edit && !todo.isDone){
                                        setEdit(!edit)

                                    } 
                                }}
                            >
                                <MdEdit />
                            </span>
                            <span 
                                className="icon"
                                onClick={()=> handleDelete(todo.id)}>
                                <MdDelete />
                            </span>
                            <span 
                                className="icon"
                                onClick={()=> handleDone(todo.id)}>
                                <MdDone />
                            </span>
                        </div>
                </form>
            )}
        </Draggable>

    )
}

export default SingleTodo
