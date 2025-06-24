import React from 'react'
import "./Input.css"

const Input = ({onChange,onSubmit,value}) => {
  return (
    <>
    <div className='input-container'>
      <h3>Input ToDo : </h3>
      <input type='text' onChange={onChange} value={value}/>
      <button className='input-add' onClick={ onSubmit }>
        Add
        </button>
    </div>
    </>
  )
}

export default Input