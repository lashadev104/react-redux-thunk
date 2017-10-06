import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import { browserHistory }  from 'react-router';
import { loginRequest } from '../../../actions/auth';
import Title from '../../../components/Title/title';
import FacebookLogin from 'react-facebook-login';
import * as Validate from '../../../constants/validate';
// import './login.scss';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            isValidate: false,
            isEmail: false,
            isPassword: false
        }
    }

    handleLogin = () => {
        const { dispatch } = this.props;
        this.setState({ isValidate: true });
        if (this.state.isEmail === false || this.state.isPassword === false ){
            return ;
        }
        let data = {
            email: this.state.email,
            password: this.state.password
        }
        dispatch(loginRequest(data));
    }
    gotoPage = (path) => {
        browserHistory.push(path);
    }
    onInputChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
        if (name === 'email'){
            this.setState({ isEmail: Validate.emailValidate(value)});
        }
        if (name === 'password'){
            this.setState({ isPassword: Validate.passwordValidate(value)});
        }
    }
    onKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleLogin();
        }
    }
    responseFacebook = (response) => {
        console.log(response);
    }
    render() {
        return (
            <div className="login">
                <Title text="login" />
                <div className="content">
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} className="form-image1">
                            <img src="/assets/images/login-img.png" alt=""/>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <div className="user-form">
                                <span className="user-form-header">Gigder - Find musicians easily.</span>
                                <span className="user-form-subheader">If you don't have gigder.com account <br /> you can <a onClick={() => this.gotoPage('/account/register')}>register</a>.</span>
                                <span className="user-form-fieldtext">Email</span>
                                <input name="email" className="user-form-field" style={ this.state.isValidate && !this.state.isEmail?Validate.errorStyle: null } type="text" onChange={this.onInputChange} onKeyPress={this.onKeyPress} />
                                <span className="user-form-fieldtext">Password</span>
                                <input name="password" className="user-form-field" style={ this.state.isValidate && !this.state.isPassword?Validate.errorStyle: null } type="password" onChange={this.onInputChange} onKeyPress={this.onKeyPress} />
                                <div className="button" onClick={this.handleLogin}>Login</div>
                                <a onClick={() => this.gotoPage('/account/forgotpassword')}>Forgot your password</a>
                                <a onClick={() => this.gotoPage('/account/register')}>Register</a>
                                {/* <div className="button facebook">Login with Facebook</div> */}
                                <FacebookLogin
                                    appId="1353292368117772"
                                    autoLoad={ false }
                                    fields="name,email,picture"
                                    scope="public_profile,email"
                                    callback={ this.responseFacebook }
                                    cssClass="button facebook"
                                />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} className="form-image2">
                            <img src="/assets/images/login-img.png" alt=""/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default connect()(Login);