import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { firebaseApp } from './firebase/firebase'

import 'react-dates/initialize'; // necessary for latest version

import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { login, logout } from './actions/auth'
import { startSetExpenses } from './actions/expenses'

import LoadingPage from './components/LoadingPage'
import './styles/styles.scss'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'))
        hasRendered = true
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('root'))

firebaseApp.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid, user.displayName, user.photoURL))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        });
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
});
