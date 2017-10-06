import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import SocialIcon from '../SocialIcon/socialicon';
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Row>
                    <Col xs={6} sm={6} md={3} lg={3}>
                        <p>ACCOUNTS</p>
                        <ul>
                            <li>Login</li>
                            <li>Register</li>
                            <li>Settings</li>
                        </ul>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3}>
                        <p>DIRECTORY</p>
                        <ul>
                            <li>Site Link 1</li>
                            <li>Site Link 2</li>
                            <li>Site Link 3</li>
                            <li>Site Link 4</li>
                            <li>Site Link 5</li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <SocialIcon />
                        <div className="email-subscribe">
                            <input type="text" className="email-subscribe-input" placeholder="Enter email for updates..." />
                            <div className="email-subscribe-button button"> Submit </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Footer;
