import React, { Component } from 'react';
import './TaskList.css';


class Task extends Component{
    constructor(props){
        super(props);
    this.state={
        sub:[]
    };
    this.show=this.show.bind(this);
}

show(){
    this.props.Show();
}



    render(){
    return(
        <div>
            {this.props.children}
        </div>
        
    )
    }
}

export default Task