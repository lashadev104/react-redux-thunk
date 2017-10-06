import React, { Component } from 'react';
import Tags from '../Tags/tags';

class Item extends Component {
    render() {
        return (
            <div className="items-panel-item">
                <img src={this.props.data.url} alt="" />
                <div className="items-panel-item-detail">
                    <p>{this.props.data.name}</p>
                    <span>{this.props.data.city}</span>
                    <Tags data={ this.props.data.tags } />
                </div>
            </div>
        )
    }
}
 
export default Item;