import React, { Component } from 'react';
import Footer from "./footer"
import Header from "./header"
import Connected from "./connected"
import PersonalData from "./PersonalData"


class InfoTask extends Component{
    constructor(props){
        super(props);
    this.state={
        data:[]
    };
}
    render(){
    return(
        <div>
        <div id="wrapper">
        <Header email={this.props.match.params.email}/>
        <PersonalData url={this.props.match.params.email}/>
        <Connected/>
        <Footer/>
        </div>
        </div>

    )
    }
}

export default InfoTask