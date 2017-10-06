import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ImageWithText from './imagewithtext';
import './howitwork.scss';

class HowItWork extends Component {
    render() {
        return (
            <div className="howitwork">
                <span className="title">HOW IT WORKS</span>
                <Row>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <ImageWithText name="step-1" title="Sign Up for Free" text="Join the community on Gigder today to connect with musicians and venues immediately." />
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <ImageWithText name="step-2" title="Make Yourself Seen" text="Create simple advertisements with ease. With specified search tags, your posts will appear to people looking for your niche." />
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <ImageWithText name="step-3" title="Explore and Connect" text="Reach out to artists looking for gigs, venues in need of perfomers, or aspiring musicians seeking lessons." /> 
                    </Col>
                </Row>
            </div>
        )
    }
}
 
export default HowItWork;