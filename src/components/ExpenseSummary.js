import React from 'react'
import {connect} from 'react-redux'
import filteredExpense from '../selectors/expense'
import numeral from 'numeral'

const calculateTotalAmount = (expenses)=>{

    if(expenses.length === 0)
      return 0
  
    let total = 0
    expenses.forEach(expense => {
      total = total + expense.amount
    })
  
    return total
  }

const ExpenseSummary = (props)=>{

    const expenseWord = props.expenseCount === 1? 'expense':'expenses'
    const formattedExpenseTotal = numeral(props.expenseTotal).format('$0,0.00')

    return(
        <div>
            {
                <h1>Viewing {props.expenseCount} {expenseWord} totalling {formattedExpenseTotal} </h1>
            }
        </div>
    )
}

const mapStatToProp = (currentState)=>{
    const expenses = filteredExpense(currentState.expenses, currentState.filterRules)
    return {
        expenseCount: expenses.length,
        expenseTotal: calculateTotalAmount(expenses)
    }
}

export default (connect(mapStatToProp))(ExpenseSummary)