import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from '../../actions/auth';
import { browserHistory }  from 'react-router';
import './header.scss';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLogged: false
        }
    }
    
    componentWillReceiveProps(nextProps){
        console.log("token", localStorage.getItem('token'));
        console.log("asdfasdf",nextProps.auth);
        nextProps.auth === null? this.setState({ isLogged: false }) : this.setState({ isLogged: true })
    }

    gotoPage = (path) => {
        browserHistory.push(path);
    }
    logOut = () => {
        const { dispatch } = this.props;
        dispatch(logoutRequest());
    }
    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <img src="/assets/images/logo.png" className="logo" alt="" onClick={() => this.gotoPage('/home')} />
                    <div style={{marginTop: 15}}>
                        <p>GIG FINDER:</p>
                        <p>Find other musicians easily</p>
                    </div>
                </div>
                <div className="header-right">
                    <div className="button">Place Ad</div>
                    {/* <img src="/assets/icons/german-flag.gif" className="avata" alt="" /> */}
                    <div className="avata">
                        <i className="fa fa-user" /> 
                    </div>
                    <div style={{marginLeft: 10, marginTop: 7}}>
                        {
                            this.state.isLogged?<h5><a onClick={this.logOut}>LOGOUT<br />MY ACCOUNT</a></h5>:<h5><a onClick={() => this.gotoPage('/account/login')}>LOGIN<br />MY ACCOUNT</a></h5>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(Header);