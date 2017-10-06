import React, { Component } from 'react';
import Tags from '../Tags/tags';
import './mainhome.scss';


class MainHome extends Component {
    constructor(){
        super();
        this.state =  {
            tags: ["Funk", "Guitar", "Lessons"],
        }
    }

    addTag = (text) => {
        var temp = this.state.tags.slice();
        temp.push(text);
        this.setState({ tags: temp });
    }

    removeTag = (index) => {
        var temp = this.state.tags.slice();
        temp.splice(index, 1);
        this.setState({ tags: temp });
    }

    render() {
        return (
            <div className="home-main" style={{backgroundImage: `url('/assets/images/hero.jpg')`}}>
                <div className="home-main-content">
                    <span className="title">GIGDER</span>
                    <span className="subtitle">The only platform that lets you search for musicians, bands, lessons, and gigs with ease.</span>
                    <div className="search-box">
                        <span className="dropdown search">
                            <select>
                                <option>Musicians</option>
                                <option>Bands</option>
                                <option>Lessons</option>
                            </select>
                        </span>
                        <span className="dropdown location">
                            <select>
                                <option>Musicians</option>
                                <option>Bands</option>
                                <option>Lessons</option>
                            </select>
                        </span>
                        <div className="button">Search</div>
                    </div>
                    <div className="tag-field">
                        <Tags data={ this.state.tags } type="add" removeTag={(index) => this.removeTag(index)} addTag={ (text) => this.addTag(text) } />
                    </div>
                </div>
            </div>
        )
    }
}
 
export default MainHome;