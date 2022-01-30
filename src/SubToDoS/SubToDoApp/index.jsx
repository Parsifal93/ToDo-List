import { useState } from 'react'
import 'array.prototype.move';
import SubToDo from '../SubToDo'
import SubToDoForm from '../SubToDoForm'
import '../../App.css' 

function SubToDoApp() {
  const [subtodos, setsubTodos] = useState([])

  const addsubTask = (usersubInput) => {
    if(usersubInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: usersubInput,
        complete: false
      }
      setsubTodos([...subtodos, newItem])
    }
  }

  const removesubTask = (id) => {
    setsubTodos([...subtodos.filter((subtodo) => subtodo.id !== id)])
  }

  const handlesubToggle = (id) => {
    setsubTodos([
      ...subtodos.map((subtodo) => 
        subtodo.id === id ? { ...subtodo, complete: !subtodo.complete } : {...subtodo }
      )
    ])
  }
  const swapSubUp = () =>{
    setsubTodos(([...subtodos.concat(...subtodos.splice(0,1))]));
   
   
   console.log(subtodos)
    }
    const swapSubDown = () =>{
      setsubTodos(([...subtodos.concat(...subtodos.splice(0,subtodos.length-1))]));
     
     console.log(subtodos)
      }

  return (
    <div className="subApp">
      
      
      {subtodos.map((subtodo) => {
        return (
          <SubToDo
            subtodo={subtodo}
            key={subtodo.id}
            togglesubTask={handlesubToggle}
            removesubTask={removesubTask}
            swapSubUp={swapSubUp}
            swapSubDown={swapSubDown}
            />
        )
      })}
      <SubToDoForm addsubTask={addsubTask} />
    </div>
  );
}

export default SubToDoApp;