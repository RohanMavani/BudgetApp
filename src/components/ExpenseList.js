import React from 'react'
import {connect} from 'react-redux'
import filteredExpense from '../selectors/expense'
import ViewExpenseList from './ExpenseListItem'

const ExpenseList = (props)=>{
    return (
      <div>
        {
          props.expenses.map((expense)=>{
            return <ViewExpenseList key={expense.id} {...expense} />
          })
        }
      </div>
    )
};
  
export default (connect((state)=>{
    return {
        expenses:filteredExpense(state.expenses, state.filterRules)
    }
}))(ExpenseList)