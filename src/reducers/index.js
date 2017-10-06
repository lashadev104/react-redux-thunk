import { combineReducers } from 'redux';
import {reducer as notifications} from 'react-notification-system-redux';
import { routerReducer } from 'react-router-redux'
import auth_reducer from './auth';

const appReducer = combineReducers({
    auth: auth_reducer,
    notifications,
    router: routerReducer
});

export default appReducer;