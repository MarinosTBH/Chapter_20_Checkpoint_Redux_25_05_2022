import React from 'react';
import { connect,useDispatch } from 'react-redux'
import EditTask  from './EditTask';
import { doneTask } from '../JS/Actions/actions';


const MapStateToProps = state => {   //mapStateToProps: returns the state (or only a portion of the state ) and passes it to  Component as a props.
    return {                         //Needs to be implemented by you.
        tasks : state.tasks,       // tasks instead of posts SAME in rootReducer
        
    }
}

const ListTask = (props) => {


    const dispatch = useDispatch();

    const handleDone = (id, isDone) => {
        dispatch(doneTask({id, isDone}))
        
    }
    return (
        <div>
            {props.tasks.map((task) => 
                <div id={task.id}>
                    <h3>{task.description} </h3>
                    <EditTask task={task}/>
                    <button onClick={()=>handleDone(task.id, task.isDone)}>{task.isDone?  "Done" : "Not Done"} </button>
                </div>
            )}
        </div>)
}

export default connect(MapStateToProps)(ListTask);  //provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
