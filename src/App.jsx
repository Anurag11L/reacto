
import { useState } from 'react'
import './App.css'

function App() {

  const[toDoList, setToDoList] = useState([
    "toDo 1",
    "toDo 2",
    "toDo 3"
  ])

  const[newToDo, setNewToDo]= useState("");
  // console.log(newToDo);

  const addToDo=(e)=>{
    e.preventDefault();
    setToDoList([ ... toDoList, newToDo]);
    setNewToDo("");
  }

  const deleteToDo =(index)=>{
    let  newToDoList = [... toDoList]
    newToDoList.splice(index,1)
    setToDoList(newToDoList);
  }

  return (
    <div className="App">
     <div className='box' id="heading">
    <h1>
        Hello World
    </h1>
</div>

<div className='box'>

    {toDoList.map((item,index )=>{
      return(
        <div className='item' key={index}>
        <input type="checkbox" isChecked={false} onChange={ ()=> deleteToDo(index)} />
        <p>{item}</p>
    </div>
      )
    })}
    
     {/* <div className='item'>
        <input type="checkbox" />
        <p>Item 1</p>
    </div>
    <div className='item'>
        <input type="checkbox" />
        <p>Item 1</p>
    </div>  */}

    <form className='item'>
        <input type="text" name="newTodo" placeholder="New Item" autocomplete="off" onChange={(e)=>{
          setNewToDo(e.target.value)
        }}  value={ newToDo}/>
        <button type="submit" name="listSubmit" onClick={addToDo} >+</button>
    </form>
</div>
    </div>
  )
}

export default App
