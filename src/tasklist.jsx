import {tasks as data } from "./tasks";
import { useState, useEffect } from "react"

function Tasklist() {
        const [tasks, setTasks] = useState([])

    useEffect(() => {
      setTasks(data)
      },[] ) 
    

    if (tasks.length === 0) {
        return <h1> No hay tareas</h1>
        
    }

  return (
    <div>
        
    {tasks.map ((task) => (
        <div>tarea</div>
    ))};

    </div>
  )
}

export default Tasklist