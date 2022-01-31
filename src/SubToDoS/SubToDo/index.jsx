import SubToDoApp from "../SubToDoApp"

function SubToDo({ subtodo, togglesubTask, removesubTask,swapSubUp,swapSubDown }) {
    return (
    <ul>
        <li key={subtodo.id} className="sub-item-todo">
            <li 
                className={subtodo.complete ? "sub-item-text sub-strike" : "sub-item-text"}
                onClick={() => togglesubTask(subtodo.id)}
                >
                {subtodo.task}
            </li>
            <div className="sub-item-delete" onClick={() => removesubTask(subtodo.id)}>
                X
            </div>
        <button className="sub-btn-up" onClick={() =>swapSubUp(subtodo.id)}>UP</button>
        <button className="sub-btn-down" onClick={() => swapSubDown(subtodo.id)}>DOWN</button>
        </li>
        <ul>
        <li>
        <SubToDoApp />
        </li>
        </ul>
        </ul>
    )
}

export default SubToDo