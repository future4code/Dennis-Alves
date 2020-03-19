import { combineReducers} from 'redux';
import { todos } from './todos'

export const rootReduce = combineReducers({
    todos
})

export default rootReduce;