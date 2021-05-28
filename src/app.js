import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter'
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import {Provider} from 'react-redux'
import './firebase/firebase'
import configeStore from './store/configureStore'
import {fetchExpenses} from './actions/expenses'
import {firebase} from './firebase/firebase'
import { login, logout } from './actions/auth'
import LoadingPage from './components/LoadingPage'

const store = configeStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


let isAlreadyRendered = false

const renderApp = ()=>{

    if(!isAlreadyRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        isAlreadyRendered = true
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(fetchExpenses()).then(()=>{
            renderApp()
            if(history.location.pathname === '/'){
                history.push('/dashboard')
            }
        })
    }else{
        renderApp()
        store.dispatch(logout())
        history.push('/')
    }
})