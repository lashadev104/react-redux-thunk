import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Notifications from 'react-notification-system-redux';

class NotificationComponent extends Component {
    render() {
        const { notifications } = this.props;

        const style = {
            NotificationItem: { // Override the notification item
                DefaultStyle: { // Applied to every notification, regardless of the notification level
                    margin: '10px 10px 2px 1px'
                },

                success: { // Applied only to the success notification item
                    color: 'red'
                }
            }
        };

        return (
            <Notifications
                notifications={notifications}
                style={style}
            />
        );
    }
}

NotificationComponent.contextTypes = {
    store: PropTypes.object
};

NotificationComponent.propTypes = {
    notifications: PropTypes.array
};

export default connect(
    state => ({ notifications: state.notifications })
)(NotificationComponent);