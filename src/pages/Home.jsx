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
    if(!todo.trim())
      return

    const currentDate = new Date().toLocaleString("en-IN",{
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit"
    })

    const newTodo ={
      text: todo,
      date: currentDate
    }
    
    setTodos((prev)=>[...prev,newTodo])
    setTodo("")
  }

  const handleComplete = (index) => {
    const completedTodo = todos.filter((_,i)=>(
      i === index
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