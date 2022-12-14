import React from 'react'
import Todo from './Todo'
export default function TodoList({todos}) {
  return (
    <div className="todo-list">  
        {
            todos && todos.map(todo =>(
                <Todo key ={todo.id} todo={todo}/>
            ))  
        }
    </div>
  )
}
