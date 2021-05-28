import React from 'react'
import {provider,firebase} from '../firebase/firebase'

export const LoginPage = ()=>{
    return (

        <div className="box-layout">
            <div className="login-box"> 
                <h1 className='login-box__title'>Expensify</h1>
                <p>Let's keep your expenses under control.</p>
                <button type="button" className="button btn btn-outline-primary btn-lg" onClick={startLogin}>Login with Google</button>
            </div>           
        </div>
    )
}

const startLogin = () => {
    firebase.auth().signInWithPopup(provider);
}

