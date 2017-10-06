import React, { Component } from 'react';
import { connect } from 'react-redux';
import { verificationRequest } from '../../../actions/auth';

class ActivateAccount extends Component {

    componentWillMount(){
        console.log("asdfa");
        const { dispatch } = this.props;
        console.log("GUID=", this.props.params.guid);
        let data = {
            securityCode: this.props.params.guid
        }
        dispatch(verificationRequest(data));
    }
    
    render() {
        return (
            <div >
            </div>
        )
    }
}

export default connect()(ActivateAccount);