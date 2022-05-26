import AddTask from './Comps/AddTask';
import ListTask from './Comps/ListTask';
import {useState} from "react"
import "./App.css";

function App() {
  
  
  return (
    <div className="App">

      <div className='App-inn' >
        {/* Navbar */}
        <div className='addTodo' style={{backgroundColor:"grey"}}>
          <AddTask />
        </div>
        <div  className="myToDoList" style={{backgroundColor:"black", padding:10}}> 
          <ListTask  />
        </div>

      </div>
    </div>
  );
}

export default App;