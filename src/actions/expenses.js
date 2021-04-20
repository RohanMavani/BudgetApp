import {v4 as uuid} from 'uuid'
import database from '../firebase/firebase'

// Add expense
 export const addExpense = (expense) =>{
    return {
        type:'ADD_EXPENSE',
        expense
    }
}

// Add expense in DB 
export const startAddExpense = (expenseData)=>{
    return (dispatch)=>{

        // set the default expense
        const {amount = 0, note='', description='', createdAt=0}  = expenseData
        const expense = {amount, note, description, createdAt} 
        database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key, 
                ...expense
            }))
        })
    }
}

// Remove expense 
export const removeExpense = ({id} = {})=>{
    return {
        type: "REMOVE_EXPENSE",
        id
    }
}

// Remove expense from DB
export const startRemoveExpense = ({id} = {})=>{
    return (dispatch)=>{

        database.ref(`expenses/${id}`).remove().then(()=>{            
            dispatch(removeExpense({id}))            
        })
    }
}

// Edit Expense
export const editExpense = (id, update)=>{
    return {
        type: 'EDIT_EXPENSE',
        id, 
        update
    }
}

// Updae the expense in DB
export const StartEditExpense = (id, update)=>{

    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(update).then(()=>{
            dispatch(editExpense(id, update))
        })
    }
}

// Function to fetch expenses from firebase
export const setExpense = (expenses)=>{
    return{
        type: 'SET_EXPENSE',
        expenses
    }
}


// Retrieve all the expenses from the DB and populate the store
export const fetchExpenses = ()=>{
    return function(dispatch){
        // fetch all the records from the firebase 
        return database.ref('expenses').once('value').then((dataSnapshot)=>{
            const expenses = [] 

            dataSnapshot.forEach((childSnapShot)=>{
                expenses.push({
                    id: childSnapShot.key,
                    ...childSnapShot.val()
                })
            })

            dispatch(setExpense(expenses))
           
        })
        // set the data into the store
    }
}