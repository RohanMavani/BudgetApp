import React from 'react'
import {provider,firebase} from '../firebase/firebase'

export const Logoutpage = ()=>{
    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

const logout = () => {
    firebase.auth().signOut()
}

