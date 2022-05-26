import React,{useState} from "react";
import { connect } from 'react-redux'; 
import { addTask } from '../JS/Actions/actions'; // pass actions
import "../App.css"

const mapDispatchToProps = dispatch => { //mapDispatchToProps: it does something similar, but for actions. mapDispatchToProps connects Redux actions to React props. 
    return {                             // This way a connected React component will be able to send messages to the store.
                                                
        addTask  : task => dispatch(addTask(task)) // addAtricle : The key of the first element in the returned object. It's the one that will be used in the component ( props.AddArticle )
                                                      // function: That takes a post as an argument ( the new post to be added ) and dispatch the action of adding that new post.
    }
}

const AddTask =(props) =>{


    const [description, setDescription]= useState('');
    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.length<5)
        return alert(`Description is required and must be more than 4 characters`) 

        props.addTask({
            id: Date.now(),
            description  
        })
        }


        // const handleFilter = ( isDone) => {
        //     dispatch(filterTask({ isDone})) 
        // }

    return(
        <div className="task-form">
            <h1 className="title">What <span className="titleawesome">TODO</span> today ? </h1>
            <form className="form-fill" onSubmit={handleSubmit}>
                <input className="task-input" placeholder="Type your task" type="text" name="description" id="description" onChange={e => setDescription(e.target.value)}/>
                <input className="task-btn" type="submit" value="Add" />
            </form>
        </div>
)
}

export default connect(null,mapDispatchToProps)(AddTask);