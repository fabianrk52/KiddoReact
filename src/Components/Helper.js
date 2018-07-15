import React, { Component } from 'react';
import './header.css';


class Helper extends Component{
    constructor(props){
        super(props)
    this.state={
        data:[]
    }
    }   

    render(){
        if(this.props.urlTo==="UpdateGrade"){
            return(
                <a href={`/${this.props.urlTo}/${this.props.email}/${this.props.id_task}`}><img className="picConnected" src={this.props.pic}></img></a>        
            )}
        else if(this.props.urlTo==="PersonalInfo"){
            return(
                <a href={`/${this.props.urlTo}/${this.props.email}`}><img className="picConnected" src={this.props.pic}></img></a>        
            )}
    }
}
export default Helper;