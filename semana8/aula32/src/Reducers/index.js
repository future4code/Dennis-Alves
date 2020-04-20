import { combineReducers, applyMiddleware} from 'redux';
import { trips,login } from './todos'


export const rootReduce = combineReducers({
    trips,login
})

export default rootReduce;