import React, { Component } from 'react';
import './TaskList.css';


class Task extends Component{
    constructor(props){
        super(props);
    this.state={
        sub:[]
    };
}

//print with line
printComplete(){
    return(<a href={`/TaskInfo/${this.props.id}/${this.props.email}`}><li><span className="TaskDone"> {this.props.name}</span></li></a>)
}

//print without line
printUnComplete(){
    return(<a href={`/TaskInfo/${this.props.id}/${this.props.email}`}><li><span>{this.props.name}</span></li></a>)
}


    //if status is completed print Task name with line, else without
    render(){
    return(
        this.props.status==="Completed"?this.printComplete():this.printUnComplete()
    )
    }
}

export default Task