import SubToDoApp from '../SubToDoS/SubToDoApp'
   
function ToDo({ todo, toggleTask, removeTask,swapUp,swapDown }) {
    return (<ul>
        <li key={todo.id} className="item-todo">
            <li 
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
                >
                {todo.task}
            </li>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                X
            </div>
            <button className="btn-up" onClick={() =>swapUp(todo.id)}>UP</button>
          <button className="btn-down" onClick={() => swapDown(todo.id)}>DOWN</button>
            <ul>
                   <SubToDoApp />
            </ul>
        </li>
        
        </ul>
    )
}

export default ToDo