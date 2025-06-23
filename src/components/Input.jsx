import React from 'react'
import "./Input.css"

const Input = ({onChange}) => {
  return (
    <>
    <div className='input-container'>
      <h3>Input ToDo : </h3>
      <input type='text' onChange={onChange}/>
      <button className='input-add'>
        Add
        </button>
    </div>
    </>
  )
}

export default Input