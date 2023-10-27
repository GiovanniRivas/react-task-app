 import { useState } from "react";

 function Taskform() {

    const [title, setTitle] = useState("");
    const handleSubmit =(e) =>{
        e.preventDefaul();
        console.log(title)
    }

    
    
    

    return (
    <div>
        
        <form onSubmit={handleSubmit}>

        <input 
        type="text" placeholder="Agregar tarea"
        onChange={(e)=> setTitle(e.target.value)}

        />
        <button>Añadir</button>
        </form>
       
    </div>
  )
}

export default Taskform

