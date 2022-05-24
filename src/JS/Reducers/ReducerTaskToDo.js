import { ADD_TASK, EDIT_TASK, DONE_TASK } from "../Constants/actions-types";

const initialState = {
    tasks: [
        {
            id:1,
            description: `Do Morning yoga for 15 minutes  `,
            isDone: true 
        },
        {
            id:2,
            description: `Do 3 consecutive hours of coding JS`,
            isDone: true 
        },
        {
            id:3,
            description: `Eat a rich vitamin meal to stay energetic  `,
            isDone: true 
        }
    ]
   };
   
   function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TASK:
            return {
                tasks : [...state.tasks, action.payload]
            }
            //done
        case EDIT_TASK : 
            return {
                tasks : state.tasks.map(task => task.id === action.payload.id ? {...task, description:action.payload.newDescription}: task )
            }    
            //done
       
        case DONE_TASK : 
            return {
                tasks : state.tasks.map(task => task.id === action.payload.id ? {...task, isDone: !action.payload.done}: task)
        }
            //done
        
            default:
                return state;
        }
        
   };
   
   export default rootReducer;