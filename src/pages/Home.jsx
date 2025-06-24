import React, { useEffect } from 'react'
import { useState } from 'react'
import Input from '../components/Input'
import Pendings from '../components/Pendings'
import Completed from '../components/Completed'
import "./Home.css"

const Home = () => {
  const [todo, setTodo] = useState("")
  const [todos,setTodos] = useState([])
  const [completedTodos,setCompletedTodos] = useState([])

  const handleChange = (e) => {
    setTodo(e.target.value);
  }
  
  const handleSubmit = () => {
    setTodos((prev)=>[...prev,todo])
    setTodo("")
  }

  const handleComplete = (index) => {
    const completedTodo = todos.filter((todo)=>(
      todos.indexOf(todo) === index
    ))
    setCompletedTodos((prev) => [
      ...prev,
      ...completedTodo
    ])
    const newTodos = todos.filter((todo)=>todos.indexOf(todo) !== index)
    setTodos(newTodos)
  }

  return (
    <div className='container'>
        <Input onChange = {handleChange} onSubmit = {handleSubmit} value={todo} />
        <Pendings todos={todos} handleComplete={handleComplete}/>
        <Completed todos={completedTodos} />
    </div>
  )
}

export default Home