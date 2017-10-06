import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import { browserHistory }  from 'react-router';
import Title from '../../../components/Title/title';
import { signUpRequest } from '../../../actions/auth';
import * as Validate from '../../../constants/validate';
// import './signup.scss';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            isValidate: false,
            isEmail: false,
            isPassword: false,
            isConfirm: false,
            isFullName: false,
            isCheck: false
        }
    }

    handleRegister = () => {
        const { dispatch } = this.props;
        this.setState({ isValidate: true });
        console.log("State ", this.state);
        if (!this.state.isEmail || !this.state.isPassword || !this.state.isConfirm || !this.state.isFullName || !this.state.isCheck ){
            return ;
        }
        let data = {
            email: this.state.email,
            firstname: this.state.fullname.split(' ')[0],
            lastname: this.state.fullname.split(' ')[1],
            password: this.state.password,
            passwordConfirmation: this.state.confirm,
            languageName: "en-US"
        }
        dispatch(signUpRequest(data));
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
        if (name === 'confirm'){
            this.setState({ isConfirm: Validate.passwordConfirm(this.state.password, value)});
        }
        if (name === 'fullname'){
            this.setState({ isFullName: Validate.fullnameValidate(value)});
        }
    }
    onKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleRegister();
        }
    }
    handleCheck = (e) => {
        this.setState({ isCheck: e.target.checked });
    }
    render() {
        return (
            <div className="signup">
                <Title text="register" />
                <div className="content">
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} className="form-image1">
                            <img src="/assets/images/register-img.png" alt=""/>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <div className="user-form">
                                <span className="user-form-header">Gigder - Register</span>
                                <span className="user-form-subheader">If you have gigder.com account <br /> you can <a onClick={() => this.gotoPage('/account/login')}>login</a>.</span>
                                <span className="user-form-fieldtext">Email</span>
                                <input name="email" className="user-form-field" style={ this.state.isValidate && !this.state.isEmail?Validate.errorStyle: null } type="text" onChange={this.onInputChange} onKeyPress={this.onKeyPress} />
                                <span className="user-form-fieldtext">Password</span>
                                <input name="password" className="user-form-field" style={ this.state.isValidate && !this.state.isPassword?Validate.errorStyle: null } type="password" onChange={this.onInputChange} onKeyPress={this.onKeyPress} />
                                <span className="user-form-fieldtext">Password Confirmation</span>
                                <input name="confirm" className="user-form-field" style={ this.state.isValidate && !this.state.isConfirm?Validate.errorStyle: null } type="password" onChange={this.onInputChange} onKeyPress={this.onKeyPress} />
                                <span className="user-form-fieldtext">Full Name</span>
                                <input name="fullname" className="user-form-field" style={ this.state.isValidate && !this.state.isFullName?Validate.errorStyle: null } type="text" onChange={this.onInputChange} onKeyPress={this.onKeyPress} />
                                <div className="user-form-checkbox">
                                <input type="checkbox" value="Read Terms and Data Policy" onClick={ this.handleCheck } /><span style={ this.state.isValidate && !this.state.isCheck?'color: #ac2d3f': null }>Read Terms and Data Policy</span>
                                </div>
                                <div className="button" onClick={this.handleRegister}  >Register</div>
                                <a onClick={() => this.gotoPage('/account/login')}>Login</a>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} className="form-image2">
                            <img src="/assets/images/register-img.png" alt=""/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default connect()(Signup);