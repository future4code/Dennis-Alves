import { combineReducers} from 'redux';
import addTask from './addTask'

const rootReduce = combineReducers({
    addTask: addTask
})

export default rootReduce;