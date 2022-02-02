import React, { useState } from 'react'

const App =() => {

    const [name,setName] = useState("");
    const[fullName,setfull] = useState("")


    function inputEvent(event){
       setName(event.target.value)
    }

    function print(){
        let fullName = {name}
        setfull(name)
    }
    
    return(<><div>
        <h1>{fullName}</h1>
        <input type="text" placeholder = "enter text" onChange={inputEvent}
        value={name}></input>
        <button onClick={print}>click me</button>
        </div>
        </>)
}

export default App;