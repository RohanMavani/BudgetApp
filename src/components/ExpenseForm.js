import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import RemoveButton from './RemoveExpense'


export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.expense ? props.expense.note : '',
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? props.expense.amount.toString() : '', // Amount will be in String to perform validation
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(), // we have to covert miliseconds back to date
      focused: false,
      error: '',
    };
  }

  onDescriptionChange = (e) => {
    let description = e.target.value
    description = description.charAt(0).toUpperCase() + description.slice(1)
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;

    // Only accepted format is will two decimals max
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  submitForm = (e) => {
    e.preventDefault();

    // Description and amount are must

    if (this.state.description && this.state.amount) {
      // clear the error
      this.setState(() => ({ error: '' }));

      this.props.onSubmit({
        amount: parseFloat(this.state.amount),
        description: this.state.description,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    } else {
      // set an error message
      this.setState(() => ({ error: 'Please enter valid data.' }));
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.submitForm}>
        {this.state.error && <p className="form-error">{this.state.error}</p>}
        <input
          type="text"
          className="form-control text-input"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />

        <input
          type="text"
          className="form-control text-input"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />

        <div className="date">
          <SingleDatePicker
            date={this.state.createdAt} // momentPropTypes.momentObj or null
            onDateChange={(createdAt) => {
              if (createdAt) this.setState({ createdAt });
            }} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            numberOfMonths={1}
            isOutsideRange={() => false}
            block
          />
        </div>

        <textarea
          type="textarea"
          className="form-control text-input"
          placeholder="Add a note for your expense(optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        />

        <button className="button">{this.props.id ? 'Update Expense' : 'Add Expense'}</button>
        {this.props.id && <RemoveButton id = {this.props.id}/>}
      </form>
    );
  }
}


