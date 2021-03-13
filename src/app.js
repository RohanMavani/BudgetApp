import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import {Provider, connect} from 'react-redux'
import configeStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'

const store = configeStore()

store.dispatch(addExpense({ amount: 100 , description:"gas bill"}));
store.dispatch(addExpense({ amount: 300 , description:"gas amount"}));
store.dispatch(addExpense({ amount: 200 , description:"grocery bill"}));

console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
