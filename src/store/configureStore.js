import {combineReducers, createStore, applyMiddleware, compose } from 'redux'
import expenseHandler from '../reducers/expenses'
import filterHandler from '../reducers/filters'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = ()=>{
    return createStore(combineReducers({
        expenses: expenseHandler,
        filterRules: filterHandler
    }),
    composeEnhancers(applyMiddleware(thunk)))
}

export default store