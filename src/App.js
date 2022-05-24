import AddTask from './Comps/AddTask';
import ListTask from './Comps/ListTask';
import "./App.css";

function App() {

  return (
    <div className="App">

      <div className='App-inn' >
        {/* Navbar */}
        <div className='addTodo' style={{backgroundColor:"grey"}}>
          <AddTask />
        </div>
        <div className="myToDoList" style={{backgroundColor:"black"}}> 
          <ListTask  />
        </div>

      </div>
    </div>
  );
}

export default App;