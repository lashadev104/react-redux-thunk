import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import { browserHistory }  from 'react-router';
import { resetPasswordRequest } from '../../../actions/auth';
import Title from '../../../components/Title/title';
import * as Validate from '../../../constants/validate';
// import './login.scss';

class ResetPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            isValidate: false,
            isPassword: false,
            isContorm: false
        }
    }
    handleResetPassword = () => {
        const { dispatch } = this.props;
        this.setState({ isValidate: true });
        if (this.state.isPassword === false || this.state.isContorm === false ){
            return ;
        }
        let data = {
            password: this.state.password,
            passwordConfirmation: this.state.confirm,
            resetPasswordKey: this.props.params.guid
        }
        dispatch(resetPasswordRequest(data));
    }
    gotoPage = (path) => {
        browserHistory.push(path);
    }
    onInputChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
        if (name === 'password'){
            this.setState({ isPassword: Validate.passwordValidate(value)});
        }
        if (name === 'confirm'){
            this.setState({ isContorm: Validate.passwordConfirm(this.state.password, value)});
        }
    }
    onKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleResetPassword();
        }
    }
    render() {
        return (
            <div className="login">
                <Title text="reset password" />
                <div className="content">
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} className="form-image1">
                            <img src="/assets/images/reset-password-img.png" alt=""/>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <div className="user-form">
                                <span className="user-form-header">Gigder - Reset Password</span>
                                <span className="user-form-subheader">If you don't have gigder.com account <br /> you can <a onClick={() => this.gotoPage('/account/register')}>register</a> or for <a onClick={() => this.gotoPage('/account/login')}>login</a> .</span>
                                <span className="user-form-fieldtext">Password</span>
                                <input name="password" className="user-form-field" style={ this.state.isValidate && !this.state.isPassword?Validate.errorStyle: null } type="password" onChange={this.onInputChange} onKeyPress={this.onKeyPress} />
                                <span className="user-form-fieldtext">Password Confirmation</span>
                                <input name="confirm" className="user-form-field" style={ this.state.isValidate && !this.state.isContorm?Validate.errorStyle: null } type="password" onChange={this.onInputChange} onKeyPress={this.onKeyPress} />
                                <div className="button" onClick={this.handleResetPassword}>Reset Password</div>
                                <a onClick={() => this.gotoPage('/account/login')}>Login</a>
                                <a onClick={() => this.gotoPage('/account/register')}>Register</a>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} className="form-image2">
                            <img src="/assets/images/reset-password-img.png" alt=""/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default connect()(ResetPassword);