import React,{useEffect, useState} from 'react';
import { connect,useDispatch } from 'react-redux'
import EditTask  from './EditTask';
import {Button} from "react-bootstrap";
import { doneTask, deleteTask } from '../JS/Actions/actions';

const MapStateToProps = state => {   //mapStateToProps: returns the state (or only a portion of the state ) and passes it to  Component as a props.
    return {                         //Needs to be implemented by you.
        tasks : state.tasks,       // tasks instead of posts SAME in rootReducer
        
    }
}


const ListTask = (props) => {
    ////////////////////
    // const [items, setItems] = useState(props.tasks);
    const [filtered, setFiltered] = useState(props.tasks);
    useEffect(()=> {
        setFiltered(props.tasks.filter((task)=>
            task ))
    },[props.tasks]);
    /////////////////

    const dispatch = useDispatch();

    const handleDone = (id, isDone) => {
        dispatch(doneTask({id, isDone}))
        
    }
    const handleDelete = (id) => {
        dispatch(deleteTask({id}))
    }

    return (
        <div >
            
            <Button
                style={{width:"50%", margin:"auto 10px"}}
                type="button"
                className="btn toggle-btn"
                onClick={() => filtered.setFiltered(!filtered.isDone)  }
            >
        <span className="visually-hidden">Show </span>
        <span>Filter Not Done</span>
        <span className="visually-hidden"> tasks</span>
      </Button>

            {filtered.map((task) => (
                
                <div key={task.id} style={{border : "1px solid green", backgroundColor:"grey", margin:10}}>
                    <h3>{task.description} </h3>
                    <section style={{display:"flex", gap:10}}>

                        <Button variant="danger" onClick={()=>handleDelete(task.id)}>Delete</Button>
                        <EditTask task={task}/>
                        
                        <Button variant="primary" onClick={()=>handleDone(task.id, task.isDone)}>{task.isDone?  "Done" : "Not Done"} </Button>

                    </section>
                </div>
            ))}
        </div>)
}

export default connect(MapStateToProps)(ListTask);  //provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
