//only single store in the application
////The most important concept to understand here is that the state in Redux comes from reducers.

import { createStore, applyMiddleware  } from 'redux'
import ReducerTaskToDo from '../Reducers/ReducerTaskToDo'
import thunk from "redux-thunk";


const store = createStore(ReducerTaskToDo,applyMiddleware(thunk))
export default store;

//The store is the one responsible for orchestrating the cogs. 
//The store in Redux is kind of magic and holds all the application's state.


// Arguments:

// Reducer: (Function): A reducing function that returns the next state tree, given the current state tree and an action to handle.
// [preloadedState]: The initial state. You may optionally specify it to hydrate the state from the server in universal apps.
// [enhancer]: The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc.

