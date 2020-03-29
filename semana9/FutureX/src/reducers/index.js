import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import{todos} from './todos'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    todos
    // Outros reducers aqui
  });
