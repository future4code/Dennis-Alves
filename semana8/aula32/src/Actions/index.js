export const addTask = text => {
    return {
      type: "ADD_TASK",
      payload: {
        text
      }
    }
  }
  
  export const toggleTask = id => {
    return {
      type: "TOGGLE_TASK",
      payload: {
        id
      }
    }
  }
  
  export const deleteTask = id => {
    return {
      type: "DELETE_TASK",
      payload: {
        id
      }
    }
  }

   export const completeAllTasks = () => {
    return {
      type: "COMPLETE_ALL_TASKS",
      
    }
  }
  
  export const deleteAllComplete = () => {
    return {
      type: "DELETE_ALL_COMPLETE",
      
    }
  }

  export const setFilter = (filter) => {
    return {
      type: "SET_FILTER",
      payload: {
        filter
      }
    }
  }
  
  