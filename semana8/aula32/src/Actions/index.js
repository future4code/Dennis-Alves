export const addTaskAction = taskName => {
    return {
      type: "ADD_TASK",
      payload: {
        taskName: taskName
      }
    };
  };
  
  