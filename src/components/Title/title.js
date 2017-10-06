import React, { Component } from 'react';
import './title.scss';

class Title extends Component {
    render() {
        return (
            <div className="user-title" style={{backgroundImage: `url('/assets/images/hero.jpg')`}}>
                <div className="wrapper">
                    <span className="user-title-text">{ this.props.text }</span>
                </div>
            </div>
        )
    }
}

export default Title;