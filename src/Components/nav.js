import React, { Component } from 'react';
import './nav.css';


class Nav extends Component{
    constructor(props){
        super(props)
    

    }

    render(){
    return(
        <div className="nav">
          <a href="#" className="navboxselected"><div className="datebox">Jan 12</div><div className="daybox">Today</div></a>
          <a href="#" className="navbox"><div className="datebox">Jan 12</div><div className="daybox">Tommorow</div></a>
          <a href="#" className="navbox"><div className="datebox">Jan 12</div><div className="daybox">Friday</div></a>
        </div>
    )
    }
}

export default Nav