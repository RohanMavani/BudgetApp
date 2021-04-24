import React from 'react'
import {provider,firebase} from '../firebase/firebase'

export const LoginPage = ()=>{
    return (
        <div>
            <button onClick={startLogin}>Login</button>
        </div>
    )
}

const startLogin = () => {
    firebase.auth().signInWithPopup(provider);
}

