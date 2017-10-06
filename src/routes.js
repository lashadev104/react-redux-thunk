import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './containers/Home/home';
import User from './containers/Account/user';
import AccountVerification from './containers/Account/AccountVerification/accountverification';
import Login from './containers/Account/Login/login';
import Signup from './containers/Account/Signup/signup';
import ForgotPassword from './containers/Account/ForgotPassword/forgotpassword';
import ResetPassword from './containers/Account/ResetPassword/resetpassword';
import ActivateAccount from './containers/Account/Activate/activate';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="/home" component={ Home } />
        <Route path="/account" component={ User }>
            <IndexRoute component={ Login } />
            <Route path="/account/login" component={ Login } />
            <Route path="/account/register" component={ Signup } />
            <Route path="/account/forgotpassword" component={ ForgotPassword } />
            <Route path="/account/resetPassword/:guid" component={ ResetPassword } />
            <Route path="/account/activate/:guid" component={ ActivateAccount } />
            <Route path="/account/accountverified" component={ AccountVerification } />
        </Route>
    </Route>
);