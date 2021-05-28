import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { StartEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header-title">Edit Expense</h1>
        </div>
      </div>

      <div className="content-container">
        <ExpenseForm
          expense={props.expense}
          id={props.match.params.id}
          onSubmit={(expense) => {
            props.dispatch(
              StartEditExpense(props.match.params.id, { ...expense })
            );
            props.history.push('/');
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProp = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    }),
  };
};

export default connect(mapStateToProp)(EditExpensePage);
