import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseFilter from './ExpeneseListFilter'
import ExpenseSummary from './ExpenseSummary'

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseSummary />
      <ExpenseFilter />
      <ExpenseList />
    </div>
  )
}

export default ExpenseDashboardPage