import React from 'react'
import "./Pendings.css"
import { Check } from 'lucide-react'

const Pendings = ({ todos,handleComplete }) => {
  return (
    <div className='pendings'>
      <h2>Pending ToDos</h2>
      {todos.length === 0 ? (
        <p>No Pendings</p>
      ) : (
        todos.map((todo,index)=>(
          <div key={index} className='pending-container'>
            <p>{todo}</p>
            <button className='complete-btn' onClick={()=>handleComplete(index)}>
          <Check/>
            </button>
          </div>
        ))
      )}
    </div>
    
  )
}

export default Pendings