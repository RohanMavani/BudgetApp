import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseFilter from './ExpeneseListFilter'

const ExpenseDashboardPage = () => {
  return (
    <div>
     <ExpenseFilter />
     <ExpenseList />
    </div>
  )
}

export default ExpenseDashboardPage