import React, { Component } from 'react';
import './navbar.scss';

const addStyle = {
    backgroundColor : '#151515'
}

class NavBar extends Component {
    constructor(){
        super();
        this.state = {
            menuStyle: [ true, false, false, false ],
            scrollTop: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        this.setState({ scrollTop: document.body.scrollTop || document.documentElement.scrollTop })
    }

    onMenuClick = (index) => {
        let temp = [ false, false, false, false];
        temp[index] = true;
        this.setState({ menuStyle: temp });
    }

    render() {
        return (
            <div className="navbar" style={ this.state.scrollTop > 0 ? addStyle: null} >
                <ul>
                    <li className={ this.state.menuStyle[0]?"active":"" } onClick={() => this.onMenuClick(0)}>Find Musician</li>
                    <li className={ this.state.menuStyle[1]?"active":"" } onClick={() => this.onMenuClick(1)}>Find Band</li>
                    <li className={ this.state.menuStyle[2]?"active":"" } onClick={() => this.onMenuClick(2)}>Find Music Lesson</li>
                    <li className={ this.state.menuStyle[3]?"active":"" } onClick={() => this.onMenuClick(3)}>Find Jam Session</li>
                </ul>
            </div>
        )
    }
}
 
export default NavBar;