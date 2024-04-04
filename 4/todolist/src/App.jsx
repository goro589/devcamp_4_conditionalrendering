import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoItem from "./components/ToDoItem";

function App() {
  let todo = [
    {todo: "one", priority:0},
    {todo: "two", priority:1},
    {todo: "three", priority:0},
    {todo: "four", priority:2},
    {todo: "five", priority:3},
    {todo: "six", priority:4},
    {todo: "seven", priority:5},
    {todo: "eight", priority:6},
    {todo: "nine", priority:7},
    {todo: "ten", priority:8},
  ]
  return (
    <>
    {todo.map((todoItem, id) => (
      <ToDoItem todo={todoItem.todo} priority={todoItem.priority} id={id} />
    ))}
    </>
  
    )
}

export default App
