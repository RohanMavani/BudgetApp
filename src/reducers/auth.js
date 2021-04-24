
const authReducer = (currentState = {}, action)=>{

    switch(action.type){
        case 'LOGIN': 
            return {
                uid: action.uid
            }
        case 'LOGOUT': 
            return {}
        default: 
            return currentState
    }
}

export default authReducer