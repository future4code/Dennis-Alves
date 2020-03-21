


const initialState = {
    todosList:[
    ],
    filter:"all"
  };
    
    
  export const todos = (state = initialState, action) => {
     console.log("actions",action)
     console.log("state", state)
    switch (action.type) {
      case "ADD_TASK":
        return  {
            ...state,
            todosList: action.payload.todo
        }
      case "TOGGLE_TASK":
        {    
            return{
                ...state,
                todosList: action.payload.todo
            }
        }
        case "DELETE_TASK":{
        return{
            ...state,
            todosList: action.payload.todos
        }}
        
        case "COMPLETE_ALL_TASKS":
        {const newTodoList = state.todosList.map(todo => {   
            return {
                ... todo,
                done: true
            }
        })    
        return{
            ...state,
            todosList: newTodoList
        }}
        case "DELETE_ALL_COMPLETE":    
        return{
            ...state,
            todosList: action.payload
        }

        case "SET_FILTER":{
            return {
                ...state,
                filter: action.payload.filter
            }
        }


        case "STORE_TASKS":{
            return{
                ...state,
                todosList: action.payload.tasks
            }
        }

      default:
        return state;
    }
  }
 