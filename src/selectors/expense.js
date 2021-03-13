import moment from 'moment'

// define sorting and filter 
const getVisibleExpenses = (expenses, {searchBy, sortBy, startDate, endDate }={})=>{
    return expenses.filter((expense)=>{

        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true; 
        // search by keyword
        const keywordMatch = expense.description.toLowerCase().includes(searchBy.toLowerCase())

        return startDateMatch && endDateMatch && keywordMatch
    }).sort((a, b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

export default getVisibleExpenses