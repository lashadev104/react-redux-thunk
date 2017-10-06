import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'

import rootReducer from '../reducers';

const configureStore = (history) => {
    const middlewares = [
        thunkMiddleware,
        routerMiddleware(history)
    ];

    return createStore(rootReducer , compose(
        applyMiddleware(...middlewares)
    ));
};
export default configureStore;