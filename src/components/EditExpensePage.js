import React from 'react'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {StartEditExpense, startRemoveExpense} from '../actions/expenses'

const EditExpensePage = (props) => {

  return (
    <div>
        <ExpenseForm expense = {props.expense} onSubmit={(expense)=>{
         props.dispatch(StartEditExpense(props.match.params.id, {...expense}))
         props.history.push('/')
        }}/>
        
        <button onClick={(e)=>{
            props.dispatch(startRemoveExpense({id: props.match.params.id})) 
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