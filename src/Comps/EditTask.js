import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../JS/Actions/actions';
import {Modal, Button} from "react-bootstrap"
import {FaEdit} from "react-icons/fa";

const EditTask = ({task}) => {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newDescription, setNewDescription]= useState("")
  const handleChange = (e) => {
    setNewDescription(e.target.value)
  }

  let id = task.id // 
  
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(editTask({newDescription, id}));
    handleClose()
  }
  return (
    <div>
    <FaEdit  onClick={handleShow}>
      Edit Task
    </FaEdit>
    

    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>EDIT</Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        <input style={{width:"100%"}}type="text" placeholder='description' defaultValue={task.description} onChange={handleChange}></input>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClick}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  


  )
}

export default EditTask;