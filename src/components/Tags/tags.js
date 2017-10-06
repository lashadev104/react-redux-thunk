import React, { Component } from 'react';
import Tag from './tag';
import './tags.scss';

const hide = {
    display: 'none'
}

class Tags extends Component {
    constructor(){
        super();
        this.state =  {
            addtag: false
        }
    }

    componentDidUpdate() {
        if (this.state.addtag){
            this.tagInput.focus();
        }
    }

    onInputTag = (e) => {
        if (e.keyCode === 13) {
            this.props.addTag(e.target.value);            
            this.showHideTagInput();
        }
    } 

    showHideTagInput = () => {
        this.setState({ addtag: !this.state.addtag });
    }

    remove = (index) => {
        console.log(index);
        this.props.removeTag(index);
    }

    render() {
        var taglist = this.props.data.map((name, index) => {
            return (
                <Tag name={name} key={index} onRemove={ () => this.remove(index) } />
            )
        });
        return (
            <div className="tags">
                {taglist}
                { this.props.type === "add" &&
                    <span onClick={ this.showHideTagInput } style={ this.state.addtag? hide:null }>Type a tag...</span>
                }
                { this.state.addtag &&
                    <input ref={ (input) => { this.tagInput = input; }} className="tags-input" type="text" onKeyDown={ this.onInputTag } onBlur={ this.showHideTagInput } />
                }
            </div>
        )
    }
}

export default Tags;