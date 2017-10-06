import React, { Component } from 'react';

class ImageWithText extends Component {
    render() {
        return (
            <div className="image-with-text">
                <img src={"/assets/icons/" + this.props.name + ".png"} alt="" />
                <p>{this.props.title}</p>
                <span>{this.props.text}</span>
            </div>
        )
    }
}
 
export default ImageWithText;