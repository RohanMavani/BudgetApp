import React from 'react'
import {connect} from 'react-redux'
import filteredExpense from '../selectors/expense'
import ViewExpenseList from './ExpenseListItem'

const ExpenseList = (props)=>{
    return (
      <div className='content-container'>
        <div className='expense-list-header'>
          <div className='show-for-mobile'>Expenses</div>
          <div className='show-for-desktop'>Expense</div>
          <div className='show-for-desktop'>Amount</div>
        </div>
        <div className='expense-list-body'>
          {
            props.expenses.length === 0 ? (<div className="expense-item no-exepense-message"> <span>No expenses</span>  </div>) : 
            (props.expenses.map((expense)=>{
              return <ViewExpenseList key={expense.id} {...expense} />
            }))
            }
          </div>
      </div>
    )
};
  
export default (connect((state)=>{
    return {
        expenses:filteredExpense(state.expenses, state.filterRules)
    }
}))(ExpenseList)