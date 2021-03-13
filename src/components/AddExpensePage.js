import React from 'react'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {addExpense} from '../actions/expenses'

const AddExpensePage = (props)=>{
  return (
    <ExpenseForm onSubmit = {
      (expense)=>{
        props.dispatch(addExpense({...expense}))
        props.history.push('/')
      }
    }/>
  )
}

export default connect()(AddExpensePage)