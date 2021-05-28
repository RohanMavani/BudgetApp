import React from 'react'
import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';
import {history} from '../routers/AppRouter'

const RemoveButton = (props) => {

    return (
        <button
            className="remove-button"
            onClick={() => {
                props.dispatch(startRemoveExpense({ id: props.id })),
                history.push("/")
             }
             }>Remove Expense
        </button>
    )
  }

export default connect()(RemoveButton)