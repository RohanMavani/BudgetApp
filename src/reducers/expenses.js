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
        case 'SET_EXPENSE':
            return action.expenses
        default:
            return currentState
    }
}

export default expenseHandler