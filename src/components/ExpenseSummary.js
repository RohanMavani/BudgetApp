import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import filteredExpense from '../selectors/expense';
import numeral from 'numeral';

const calculateTotalAmount = (expenses) => {
  if (expenses.length === 0) return 0;

  let total = 0;
  expenses.forEach((expense) => {
    total = total + expense.amount;
  });

  return total;
};

const ExpenseSummary = (props) => {
  const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseTotal = numeral(props.expenseTotal).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header-title">
          Viewing <span>{props.expenseCount}</span> {expenseWord} totalling{' '}
          <span>{formattedExpenseTotal}</span>{' '}
        </h1>
        <div className="page_header_action">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStatToProp = (currentState) => {
  const expenses = filteredExpense(
    currentState.expenses,
    currentState.filterRules
  );
  return {
    expenseCount: expenses.length,
    expenseTotal: calculateTotalAmount(expenses),
  };
};

export default connect(mapStatToProp)(ExpenseSummary);
