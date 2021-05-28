import React from 'react'
import {provider,firebase} from '../firebase/firebase'

export const Logoutpage = ()=>{
    return (
        <button type="button" className="logout-button" onClick={logout}>Logout</button>
    )
}

const logout = () => {
    firebase.auth().signOut()
}

