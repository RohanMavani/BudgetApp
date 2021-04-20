import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import {Provider, connect} from 'react-redux'
import configeStore from './store/configureStore'
import './firebase/firebase'
import {fetchExpenses} from './actions/expenses'


const store = configeStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(fetchExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'));
})

