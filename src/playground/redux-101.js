import { render } from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {v4 as uuid} from 'uuid'


// Add expense
const addExpense = ({amount = 0, note='', description='', createdAt=''}={}) =>{
    return {
        type:'ADD_EXPENSE',
        expense: {
            id: uuid(),
            amount, 
            note,
            description,
             
        }
    }
}

// Remove expense 
const removeExpense = ({id} = {})=>{
    return {
        type: "REMOVE_EXPENSE",
        id
    }
}

// Edit Expense
const editExpense = (id, update)=>{
    return {
        type: 'EDIT_EXPENSE',
        id, 
        update
    }
}

// define filter by rent 
const setTextFilter = (searchBy = '')=>{
    return{
        type: 'SET_TEXT_FILTER',
        searchBy
    }
}

// define sort by date
const sortByDate = ()=>{
    return {
        type: 'SORT_BY_DATE',
    }
}

// define sort by amount
const sortByAmount = ()=>{
    return {
        type: 'SORT_BY_AMOUNT'
    }
}

// set start date
const setStartDate = (startDate)=>{
    return {
        type: 'SET_START_DATE',
        startdate
    }
}

// set end date
const setEndDate = (endDate)=>{
    return {
        type: 'SET_END_DATE',
        endDate
    }
}

// Define a default state for Expense
const defaultExpenseState = []

// Define reducer function for ExpenseHandler
const expenseHandler = (currentState = defaultExpenseState, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return currentState.concat(action.expense)
        case 'REMOVE_EXPENSE':
            return (
                currentState.filter((expense)=>{
                    return expense.id !== action.id
                })
            )
        case 'EDIT_EXPENSE':
                return currentState.map((expense)=>{
                    if(expense.id === action.id){
                        return {
                            ...expense, 
                            ...action.update
                        }
                    }else{
                        return expense
                    }
                })
        default:
            return currentState
    }
}

// Define a default state for filter
const defaultFilterState = {
    searchBy:'rent',
    sortBy: 'date',
    startDate: undefined,
    endDate:undefined
}

// define sorting and filter 
const getVisibleExpenses = (expenses, {searchBy, sortBy, startDate, endDate }={})=>{
    return expenses.filter((expense)=>{
        // search by startdate
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate 
        // search by enddate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate 
        // search by keyword
        const keywordMatch = expense.description.toLowerCase().includes(searchBy.toLowerCase())

        console.log()
        return startDateMatch && endDateMatch && keywordMatch
    }).sort((a, b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

// Define reducer for filterHandler
const filterHandler = (currentState = defaultFilterState, action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...currentState,
                searchBy: action.searchBy
            }
        case 'SORT_BY_DATE':
            return {
                ...currentState, 
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...currentState,
                sortBy:'amount'
            }
        case 'SET_START_DATE':
            return{
                ...currentState,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                 ...currentState,
                   endDate: action.endDate
            }
        default:
            return currentState
    }
}

// Combine reducers
const combinedReducers = combineReducers(
    {
        expenses: expenseHandler,
        filterRules: filterHandler
    }
)

// Create a store
const store = createStore(combinedReducers)
store.subscribe(()=>{
    console.log(store.getState())
    const visibleExpense= getVisibleExpenses(store.getState().expenses, store.getState().filterRules)
    console.log(visibleExpense)
})

store.dispatch(addExpense({amount: 100, description: "Rent", createdAt: -21000}))
store.dispatch(addExpense({amount: 50, description: "Rent", createdAt: -1000}))
store.dispatch(addExpense({amount: 150, description: "Rent", createdAt: -4000}))
store.dispatch(addExpense({amount: 30, description: "Rent", createdAt: -100}))

store.dispatch(sortByAmount())
