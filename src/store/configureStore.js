import {combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import expenseHandler from '../reducers/expenses'
import filterHandler from '../reducers/filters'
import authReducer from '../reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = ()=>{
    return createStore(combineReducers({
        expenses: expenseHandler,
        filterRules: filterHandler,
        auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk)))
}

export default store