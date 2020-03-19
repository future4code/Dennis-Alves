
const initialState = {
    todosList:[
        {id: 1, done: true, text:"Aprender Redux"},
        {id: 12, done: false, text:"Questionar sua escolhas durante a sua vida.."},
        {id: 123, done: false, text:"Questionar se dev realmente vale a pena.."},
    ],
    filter:"all"
  };
  
  export const todos = (state = initialState, action) => {
     // console.log("actions",action)
     // console.log("state", state)
    switch (action.type) {
      case "ADD_TASK":
          const newTodo = {
              id: Date.now(),
              text: action.payload.text
          }
        return  {
            ...state,
            todosList: [newTodo, ...state.todosList]
        }
      case "TOGGLE_TASK":
        {
            const newTodoList = state.todosList.map(todo => {
                if(todo.id === action.payload.id){
                   return {...todo, done: !todo.done}
                }
                else{
                    return todo
                }
            })    
            return{
                ...state,
                todosList: newTodoList
            }
        }

        case "DELETE_TASK":
        {const newTodoList = state.todosList.filter(todo => {
            if(todo.id === action.payload.id){
               return false
            }
            else{
                return true
            }
        })    
        return{
            ...state,
            todosList: newTodoList
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
        {const newTodoList = state.todosList.filter(todo => {
            if(todo.done){
               return false
            }
            else{
                return true
            }
        })    
        return{
            ...state,
            todosList: newTodoList
        }}
        case "SET_FILTER":{
            return {
                ...state,
                filter: action.payload.filter
            }
        }

      default:
        return state;
    }
  }
 