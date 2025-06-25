import React from 'react'
import "./Completed.css"

const Completed = ({ todos,handleClear }) => {
  return (
    <div className='completed-container'>
      <h2>Completed ToDos</h2>
      
        {
          todos.length === 0 ? (
            <p>No Todos</p>
          ) : (
            todos.map((todo,index)=>(
              <div key={index} className='completed-todos'>
                <s> {todo.text} </s><br></br>
                <small> {todo.date} </small>
              </div>
              
              
            ))
          )
        }
        {
          todos.length > 0 && (
            <button onClick={handleClear}>Clear all</button>
          )
        }

    </div>
  )
}

export default Completed