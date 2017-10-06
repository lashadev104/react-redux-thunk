import React, { Component } from 'react';

class Tag extends Component {

    render() {
        return (
            <div className="tag">
                {this.props.name}
                <i className="fa fa-times-circle-o" onClick={() => this.props.onRemove()} />
            </div>
        )
    }
}

export default Tag;