
// define filter by rent 
export const setTextFilter = (searchBy = '')=>{
    return{
        type: 'SET_TEXT_FILTER',
        searchBy
    }
}

// define sort by date
export const sortByDate = ()=>{
    return {
        type: 'SORT_BY_DATE',
    }
}

// define sort by amount
export const sortByAmount = ()=>{
    return {
        type: 'SORT_BY_AMOUNT'
    }
}

// set start date
export const setStartDate = (startDate)=>{
    return {
        type: 'SET_START_DATE',
        startDate
    }
}

// set end date
export const setEndDate = (endDate)=>{
    return {
        type: 'SET_END_DATE',
        endDate
    }
}