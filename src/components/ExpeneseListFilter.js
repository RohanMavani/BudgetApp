import React from 'react' 
import {connect} from 'react-redux'
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters'
import 'react-dates/initialize'
import { DateRangePicker, DayPickerRangeController } from 'react-dates';

// collect the text filter and attach it to the store
class ExpenseListFilter extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            focusedInput : null
        }
    }
    

    render(){
        return (
            <div>
                <input type='text' value = {this.props.filter.searchBy} onChange={(e)=>{
                    this.props.dispatch(setTextFilter(e.target.value))
                }}/>

                <select value = {this.props.filter.sortBy} onChange={(e)=>{
                    if(e.target.value === 'date'){
                        this.props.dispatch(sortByDate())
                    }else if(e.target.value === 'amount'){
                        this.props.dispatch(sortByAmount())
                    }
                }}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                
                <DateRangePicker
                    startDate={this.props.filter.startDate}  // momentPropTypes.momentObj or null,
                    endDate={this.props.filter.endDate}      // momentPropTypes.momentObj or null,
                    onDatesChange={({ startDate, endDate }) => {
                        this.props.dispatch(setStartDate(startDate))     // dispatch startDate
                        this.props.dispatch(setEndDate(endDate))         // dispatch endDate
                    }}
                    focusedInput={this.state.focusedInput}   // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    startDateId="start"
                    endDateId="end"
                />
        </div>
        )
    }
        
    }

export default (connect((state)=>{
    return{
        filter: state.filterRules
    }
}))(ExpenseListFilter)