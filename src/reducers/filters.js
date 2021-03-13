import moment from 'moment'

// Define a default state for filter
const defaultFilterState = {
    searchBy:'',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate:moment().endOf('month')
}

// Define reducer for filterHandler
const filterHandler = (currentState = defaultFilterState, action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...currentState,
                searchBy: action.searchBy
            }
        case 'SORT_BY_DATE':
            return {
                ...currentState, 
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...currentState,
                sortBy:'amount'
            }
        case 'SET_START_DATE':
            return{
                ...currentState,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                 ...currentState,
                   endDate: action.endDate
            }
        default:
            return currentState
    }
}

export default filterHandler