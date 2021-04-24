import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import Header from "../components/Header"

const PublicRouter = ({isAuthenticated, component:Component, ...other})=>{
    // ...other contains path and exact
    return <Route {...other} component = {(props)=>
        isAuthenticated ?  ( <Redirect to='/dashboard' /> ):(<Component {...props} />) 
    }/>
}

const mapStateToProp = (state)=>{
    return {
        isAuthenticated : state.auth.uid ? true : false
    }
}

export default connect(mapStateToProp)(PublicRouter)