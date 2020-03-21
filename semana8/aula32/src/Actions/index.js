import axios from 'axios'

export const addTask = text => {
    return {
      type: "ADD_TASK",
      payload: {
        text
      }
    }
  }
  
  export const storeTasks = tasks => ({
    type: "STORE_TASKS",
    payload:{
      tasks 
    }
  })

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



  
  export const fetchTasks = () => async (dispatch, getState) => {

    
      const result = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/dennis/todos"
      )
    
    dispatch(storeTasks(result.data.todos));
  };
  
  export const createTask = (text) => async (dispatch, getState) => {
   
      const result = await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/dennis/todos",
        {
          text
        }   
      );  
    dispatch(addTask(result.data.todos));
  };

  export const changeToggle = id => async (dispatch, getState) => {
    const result = await axios.put(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/dennis/todos/${id}/toggle`
      );
    dispatch(changeToggle(id));
  };


  export const delTask = id => async (dispatch, getState) => {
    const result = await axios.delete(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/dennis/todos/${id}`
      );
    dispatch(deleteTask(id));
  };
  export const delAllTasks = () => async (dispatch, getState) => {
    const result = await axios.delete(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/dennis/todos/delete-done`
      );
    dispatch(deleteAllComplete());
  };