import React from 'react'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {startAddExpense} from '../actions/expenses'

const AddExpensePage = (props)=>{
  return (
    <ExpenseForm onSubmit = {
      (expense)=>{
        props.dispatch(startAddExpense({...expense}))
        props.history.push('/')
      }
    }/>
  )
}

export default connect()(AddExpensePage)