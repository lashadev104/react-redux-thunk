import React, { Component } from 'react';
import './socialicon.scss';

class SocialIcon extends Component {
    constructor(){
        super();
        this.state = {
            icons:[
                "google-plus",
                "snapchat",
                "twitter",
                "facebook",
                "instagram"
            ]
        }
    }
    render() {
        
        var socialicons = this.state.icons.map((name, index) => {
            return (
                <img src={"/assets/icons/" + name + ".png"} className="social-icon" alt="" key={index} />
            )
        });
        return (
            <div className="social-icons">
                {socialicons}
            </div>
        )
    }
}

export default SocialIcon;