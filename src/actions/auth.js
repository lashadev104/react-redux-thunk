import axios from './axios';
import { push } from 'react-router-redux'
import * as Types from './../constants/actionTypes';
import Notifications from 'react-notification-system-redux';

export function loginRequest(data) {
    return (dispatch) => {    
        return axios.post('/api/users/auth', data, {
            headers: { "Content-Type" : "application/json" }
        })
            .then(response => {
                window.localStorage.setItem('token', response.data.token);
                axios.defaults.Authrization = response.data.token;
                console.log("asdf", response.data);
                dispatch({
                    type: Types.LOGIN_SUCCESS,
                    payload: response.data.userInfo
                });
                dispatch(push('/home'))
            })
            .catch(err => {
                dispatch({
                    type: Types.LOGIN_FAIL,
                    error: err
                })
                let notificationOpts = {};
                if (err.response.data.errorCode === 10123){
                    notificationOpts = {
                        title: err.response.data.errorText,
                        message: "Please try again.",
                        position: 'tr',
                        autoDismiss: 3,
                        action: {
                            label: "Send Verification Mail",
                            callback: () => dispatch(sendVerificationEmail({email: err.response.data.email}))
                        }
                    }; 
                }else if (err.response.status === 500){
                    notificationOpts = {
                        title: err.response.data.errorText,
                        message: "Please try again.",
                        position: 'tr',
                        autoDismiss: 3
                    }
                }else {
                    notificationOpts = {
                        title: "Something went wrong",
                        message: "Could't sent request to server.",
                        position: 'tr',
                        autoDismiss: 3
                    }
                }

                dispatch(Notifications.error(notificationOpts));

            });
    }
}

export function logoutRequest() {
    return (dispatch) => {
        dispatch({
            type: Types.LOGOUT_SUCCESS,
        });
        dispatch(push('/'));
    }
}

export function signUpRequest(data) {
    return (dispatch) => {
        return axios.post('/api/users', data)
            .then(response => {
                dispatch({
                    type: Types.SIGNUP_SUCCESS,
                    payload: response
                })
                const notificationOpts = {
                    title: "Success",
                    message: "We just sent verification message",
                    position: 'tr',
                    autoDismiss: 3
                };
                dispatch(Notifications.success(notificationOpts));
            })
            .catch(err => {
                console.log("err", err.response);
                dispatch({
                    type: Types.SIGNUP_FAIL,
                    error: err
                })
                const notificationOpts = {
                    title: "",
                    message: "",
                    position: 'tr',
                    autoDismiss: 3
                };
                if (err.response.status === 400){
                    notificationOpts.title = err.response.data.errorText;
                    notificationOpts.message = err.response.data.validationErrors.email;
                }else {
                    notificationOpts.title = "Something went wrong";
                    notificationOpts.message = "Could't sent request to server."
                }

                dispatch(Notifications.error(notificationOpts));
            });
    }
}

function sendVerificationEmail(data) {
    return (dispatch) => {
        return axios.post('/api/users/sendAccountVerificationEmail', data)
            .then(response => {
                dispatch({
                    type: Types.VERIFY_SUCCESS,
                    payload: response
                })
                const notificationOpts = {
                    title: "Success",
                    message: "We just sent verification email",
                    position: 'tr',
                    autoDismiss: 3
                };
                dispatch(Notifications.success(notificationOpts));
            })
            .catch(err => {
                dispatch({
                    type: Types.VERIFY_FAIL,
                    error: err
                })
                const notificationOpts = {
                    title: "Something went wrong",
                    message: "Couldn't sent request to server",
                    position: 'tr',
                    autoDismiss: 3,
                    // action: {}
                };
                // if (err.response.status === 400){
                //     notificationOpts.title = err.response.data.errorText;
                //     notificationOpts.message = err.response.data.validationErrors.email;
                //     notificationOpts.action.label = 'Send Verification Email Again';
                //     notificationOpts.action.callback = sendVerificationEmail();
                // }else {
                //     notificationOpts.title = "Something went wrong";
                //     notificationOpts.message = "Could't sent request to server."
                // }

                dispatch(Notifications.error(notificationOpts));
            })
    }
}

export function verificationRequest(data){
    return (dispatch) => {
        return axios.post('/api/users/verifyAccount', data)
            .then(response => {
                dispatch({
                    type: Types.VERIFY_SUCCESS,
                    payload: response
                })
                const notificationOpts = {
                    title: "Success",
                    message: "Your Acccount is verified",
                    position: 'tr',
                    autoDismiss: 3
                };
                dispatch(Notifications.success(notificationOpts));
                dispatch(push('/account/accountverified'));
            })
            .catch(err => {
                dispatch({
                    type: Types.VERIFY_FAIL,
                    error: err
                })
                const notificationOpts = {
                    title: "",
                    message: "",
                    position: 'tr',
                    autoDismiss: 3
                };
                if (err.response.status === 400){
                    notificationOpts.title = err.response.data.errorText;
                    notificationOpts.message = err.response.data.validationErrors.email;
                }else {
                    notificationOpts.title = "Something went wrong";
                    notificationOpts.message = "Could't sent request to server."
                }

                dispatch(Notifications.error(notificationOpts));
            });
    }
}

export function forgotPasswordRequest(data) {
    return (dispatch) => {
        return axios.post('/api/users/sendResetPasswordLink', data)
            .then(response => {
                const notificationOpts = {
                    title: "Success",
                    message: "We just sent reset password link.",
                    position: 'tr',
                    autoDismiss: 3
                };
                dispatch(Notifications.success(notificationOpts));
            })
            .catch(err => {
                const notificationOpts = {
                    title: "",
                    message: "",
                    position: 'tr',
                    autoDismiss: 3,
                };
                if (err.response.status === 400){
                    notificationOpts.title = err.response.data.errorText;
                    notificationOpts.message = err.response.data.validationErrors.email;
                }else {
                    notificationOpts.title = "Something went wrong";
                    notificationOpts.message = "Could't sent request to server."
                }

                dispatch(Notifications.error(notificationOpts));
            });
    }
}

export function resetPasswordRequest(data) {
    return (dispatch) => {
        return axios.post('/api/users/resetPassword', data)
            .then(response => {
                const notificationOpts = {
                    title: "Success",
                    message: "Your password is changed successfully.",
                    position: 'tr',
                    autoDismiss: 3,
                    action: {
                        label: 'Continue',
                        callback: () => { dispatch(push('/account/login')) }
                    }
                };
                dispatch(Notifications.success(notificationOpts));
            })
            .catch(err => {
                const notificationOpts = {
                    title: "",
                    message: "",
                    position: 'tr',
                    autoDismiss: 3,
                };
                if (err.response.status === 400){
                    notificationOpts.title = err.response.data.errorText;
                    notificationOpts.message = err.response.data.validationErrors.email;
                }else {
                    notificationOpts.title = "Something went wrong";
                    notificationOpts.message = "Could't sent request to server."
                }

                dispatch(Notifications.error(notificationOpts));
            });
    }
}