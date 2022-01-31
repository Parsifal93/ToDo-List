import { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import './App.css' 

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false,
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])
  }
  const swapUp = () =>{
    setTodos(([...todos.concat(...todos.splice(0,1))]));
   
   console.log(todos)
    }
    const swapDown = () =>{
      setTodos(([...todos.concat(...todos.splice(0,todos.length-1))]));
     
     console.log(todos)
      }


  return (
    <div className="App">
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            swapUp={swapUp}
            swapDown={swapDown}
            />)
            
      })}
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;