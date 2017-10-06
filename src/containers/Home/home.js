import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import MainHome from '../../components/MainHome/mainhome';
import HowItWork from '../../components/HowItWork/howitwork';
import ItemsPanel from '../../components/ItemsPanel/itemspanel';
import { musicians, bands, lessons } from '../../constants/items';
import { aboutText } from '../../constants/about';
import './home.scss';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <MainHome />
                <HowItWork />
                <ItemsPanel title="Musicians" data={musicians} />
                <ItemsPanel title="Bands" data={bands} />
                <ItemsPanel title="Lessons" data={lessons} />
                <div className="about">
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <img src="./assets/images/about-1.png" alt="" />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className="about-content">
                            <p className="about-content-title">{aboutText[0].title}</p>
                            <span className="about-content-text">{aboutText[0].text}</span>
                        </Col>
                    </Row>
                </div>
                <div className="about">
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} className="about-content">
                            <p className="about-content-title">{aboutText[1].title}</p>
                            <span className="about-content-text">{aboutText[1].text}</span>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <img src="./assets/images/about-2.png" alt="" />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Home;