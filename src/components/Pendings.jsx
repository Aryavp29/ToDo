import React from 'react'
import "./Pendings.css"

const Pendings = ({ todos }) => {
  return (
    <div className='pendings'>
      <h2>Pending ToDos</h2>
      <div className='pendings-container'>
        {
          todos.length === 0 ? (
            <p>No pending todos</p>
          ) : (
            todos.map((todo,index)=>(
              <p key={index}> {todo} </p>
            ))
          )
        }
      </div>
    </div>
    
  )
}

export default Pendings