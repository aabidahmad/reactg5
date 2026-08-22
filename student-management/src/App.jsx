import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'
// npm create vite@latest student-management
function App() {
  return (
    <>
    <h1>Student Management  </h1>
    <p>this is student portal</p>
       <Student name="John Doe" age = {20} grade ="A" />
        <Student name="Jane Smith" age = {22} grade ="B" />
       <Student name="Bob Johnson" age = {19} grade ="C" />
    </>
  )
}

export default App
