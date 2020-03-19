// Estado inicial dos dados do nosso reducer
// bem similar a como faziamos o this.state
// nos componentes de classes
const initialState = {
    taskName: undefined,
    id: undefined,
    done: undefined,
  };
  
  // Esse reducer lida com todas as actions
  // relacionadas a linguagem que temos
  // nesse exemplo ele só tem um "case"
  // mas poderia ter vários cases aqui.
  const task = (state = initialState, action) => {
    switch (action.type) {
      case "CADD_TASK":
        return  [...state, {taskName: action.payload.taskName,id: Date().getUTCMilliseconds(), done:false} ];
      default:
        return state;
    }
  };
  
  export default task;