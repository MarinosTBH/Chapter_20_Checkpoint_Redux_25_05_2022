import React,{useState} from 'react';
import { connect,useDispatch } from 'react-redux'
import EditTask  from './EditTask';
import { doneTask, deleteTask } from '../JS/Actions/actions';
import {MdDoneAll} from "react-icons/md";
import {AiFillDelete} from "react-icons/ai";


const MapStateToProps = state => {   //mapStateToProps: returns the state (or only a portion of the state ) and passes it to  Component as a props.
    return {                         //Needs to be implemented by you.
        tasks : state.tasks,       // tasks instead of posts SAME in rootReducer
        
    }
}


const ListTask = (props) => {
    console.log(props,
        props.tasks)
    ////////////////////
    // const [items, setItems] = useState(props.tasks);
    const [filtered, setFiltered] = useState(props.tasks);

    /////////////////

    const dispatch = useDispatch();

    const handleDone = (id, isDone) => {
        dispatch(doneTask({id, isDone}))
        
    }
    const handleDelete = (id) => {
        dispatch(deleteTask({id}))
    }

    return (
        <div className='task-box'>
            <button
                type="button"
                className=" toggle-btn"
                onClick={() => setFiltered(filtered=>!filtered)  }
            >
                <span>ALL Tasks / Not Done</span>
            </button>

            {props.tasks.filter(item=> 
                {if(!filtered) {return !item.isDone} 
                return true})
                .map((task) => (
                    <div key={task.id} className="todo-row" style={{ backgroundColor:"grey"}}>
                        <div>{task.description} </div>
                        <section className='icon-box'>
                            <AiFillDelete  onClick={()=>handleDelete(task.id)}>Delete</AiFillDelete>
                            <EditTask task={task}/>
                            <MdDoneAll variant="primary" onClick={()=>handleDone(task.id, task.isDone)} style={{backgroundColor: task.isDone? "blue" : "grey"}}> </MdDoneAll>
                        </section>
                    </div>
))}
</div>)
}

export default connect(MapStateToProps)(ListTask);  //provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
