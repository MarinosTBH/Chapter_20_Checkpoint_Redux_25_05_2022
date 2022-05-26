import { ADD_TASK, EDIT_TASK, DONE_TASK, DELETE_TASK} from "../Constants/actions-types.js";


//The type property drives how the state should change and it's always required by Redux.
//The payload property instead describes what should change, and might be omitted if you don't have new data to save in the store.


export const addTask= (payload) => {
    return {
    type : ADD_TASK,
    payload,
    }
};
export const editTask= (payload) => {
    return {
    type : EDIT_TASK,
    payload,
    }
};
export const doneTask= (payload) => {
    return {
    type : DONE_TASK,
    payload,
    }
};
export const deleteTask= (payload) => {
    return {
    type : DELETE_TASK,
    payload,
    }
};





