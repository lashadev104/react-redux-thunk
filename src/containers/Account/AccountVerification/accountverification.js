import React, { Component } from 'react';
import { browserHistory }  from 'react-router';

import Title from '../../../components/Title/title';
import './accountverification.scss';

class AccountVerification extends Component {

    gotoLoginPage = () => {
        browserHistory.push('/account/login');
    }
    render() {
        return (
            <div className="account-verification">
                <Title text="account verification" />
                <div className="content">
                    <img src="/assets/images/account-verification-img.png" alt="" />
                    <i className="fa fa-check-circle" />
                    <span>Congratulations, your account has been verified</span>
                    <div className="button" onClick={this.gotoLoginPage}>Go to login page</div>  
                </div>
            </div>
        )
    }
}

export default AccountVerification;