import React from 'react'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {editExpense, removeExpense} from '../actions/expenses'

const EditExpensePage = (props) => {

  return (
    <div>
        <ExpenseForm expense = {props.expense} onSubmit={(expense)=>{
         props.dispatch(editExpense(props.match.params.id, {...expense}))
         props.history.push('/')
        }}/>
        
        <button onClick={(e)=>{
            props.dispatch(removeExpense({id: props.match.params.id})) 
            props.history.push('/')
        }}>Remove</button>
    </div>
  )
}

const mapStateToProp = (state, props)=>{
  return{
    expense: state.expenses.find((expense)=>{
      return expense.id === props.match.params.id
    }) 
  }
}

export default connect(mapStateToProp)(EditExpensePage)