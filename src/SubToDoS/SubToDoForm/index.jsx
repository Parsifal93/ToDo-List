import { useState } from 'react'

function SubToDoForm({ addsubTask }) {
    const [usersubInput, setsubUserInput] = useState('')

    const handlesubChange = (e) => {
        setsubUserInput(e.currentTarget.value)
    }
    
    const handlesubSubmit = (e) => {
        e.preventDefault()
        addsubTask(usersubInput)
        setsubUserInput("")
    }

    const handlesubKeyPress = (e) => {
        if(e.key === "Enter") {
            handlesubSubmit(e)
        }
    }
    
    return (
      <div>
        <form onSubmit={handlesubSubmit}>
            <input 
                value={usersubInput}
                type="text"
                onChange={handlesubChange}
                onKeyDown={handlesubKeyPress}
                placeholder="Enter a task..."
            />        
            <button>ADD</button>
        </form>
        </div>
    )
}

export default SubToDoForm