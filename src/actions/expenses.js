import {v4 as uuid} from 'uuid'

// Add expense
 export const addExpense = ({amount = 0, note='', description='', createdAt=0}={}) =>{
    return {
        type:'ADD_EXPENSE',
        expense: {
            id: uuid(),
            amount, 
            note,
            description,
            createdAt
        }
    }
}

// Remove expense 
export const removeExpense = ({id} = {})=>{
    return {
        type: "REMOVE_EXPENSE",
        id
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
