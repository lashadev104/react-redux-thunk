import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import { forgotPasswordRequest } from '../../../actions/auth';
import { browserHistory }  from 'react-router';
import Title from '../../../components/Title/title';
import * as Validate from '../../../constants/validate';
// import './login.scss';

class ForgotPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            isValidate: false,
            isEmail: false,
        }
    }
    handleForgotPassword = () => {
        const { dispatch } = this.props;
        this.setState({ isValidate: true });
        if (this.state.isEmail === false){
            return ;
        }
        let data = {
            email: this.state.email
        }
        dispatch(forgotPasswordRequest(data));
    }
    onKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleForgotPassword();
        }
    }
    gotoPage = (path) => {
        browserHistory.push(path);
    }
    onInputChange = (event) => {
        this.setState({ email: event.target.value });
        this.setState({ isEmail: Validate.emailValidate(event.target.value)});
    }
    render() {
        return (
            <div className="login">
                <Title text="forgot password" />
                <div className="content">
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} className="form-image1">
                            <img src="/assets/images/forgot-password-img.png" alt=""/>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <div className="user-form">
                                <span className="user-form-header">Gigder - Forgot Password</span>
                                <span className="user-form-subheader">If you don't have gigder.com account <br /> you can <a onClick={() => this.gotoPage('/account/register')}>register</a> or for <a onClick={() => this.gotoPage('/account/login')}>login</a> .</span>
                                <span className="user-form-fieldtext">Email</span>
                                <input className="user-form-field" style={ this.state.isValidate && !this.state.isEmail?Validate.errorStyle: null } type="text" onChange={this.onInputChange} onKeyPress={this.onKeyPress} />
                                <div className="button" onClick={this.handleForgotPassword}>Send password reset link</div>
                                <a onClick={() => this.gotoPage('/account/login')}>Login</a>
                                <a onClick={() => this.gotoPage('/account/register')}>Register</a>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} className="form-image2">
                            <img src="/assets/images/forgot-password-img.png" alt=""/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default connect()(ForgotPassword);