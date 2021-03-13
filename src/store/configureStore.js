import {combineReducers, createStore} from 'redux'
import expenseHandler from '../reducers/expenses'
import filterHandler from '../reducers/filters'

const store = ()=>{
    return createStore(combineReducers({
        expenses: expenseHandler,
        filterRules: filterHandler
    }))
}

export default store