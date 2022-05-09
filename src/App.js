import './App.css';
import React, {useState} from 'react';


function App() {
const [items, setItems] = useState([
  {task: "Clean windows", isHighPriority: "low"},
  {task: "Check car brakes", isHighPriority: "high"}
])

const [newItem, setNewItem] = useState();
const [priorityButton, setPriorityButton] = useState();

const saveNewItem = (event) => {
  event.preventDefault()
  const copyItem = [... items, {task : newItem, isHighPriority: priorityButton}]
  setItems(copyItem)
  setNewItem("")
}

const itemNodes = items.map((item, index) => { 
  return (
      <li key={index} className={item.isHighPriority === "high" ? "high" : "low"}>
        
      <span>{item.task}</span>
       
      </li> 
  )
})

const handleItemInput = (event) => {
  setNewItem(event.target.value)
}

const handlePriority = (priority) => {
  setPriorityButton(priority.target.value)
}

  return (
    <>
    <h1>To do list</h1>

    <form onSubmit={saveNewItem}>
      

      <input type="radio" id="high" name="priorityButton" value= "high" onChange={handlePriority} ></input>
      <label for="high">High</label> 

      <input type="radio" id="low" name="priorityButton" value="low" onChange={handlePriority}></input>
      <label for="low">Low</label> 

      <input id="new-item" type="text" onChange={handleItemInput} value={newItem} /> 

      <input type="submit" value='Save new task' />
      
     
    </form>
    
    <ul>
      {itemNodes}
    </ul>
    </>
  );
}

export default App;
