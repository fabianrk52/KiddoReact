import React, { Component } from 'react';


class Task extends Component{
    constructor(props){
        super(props);
    this.state={
        sub:[]
    };
}


componentWillMount(){
    fetch(`https://kiddo2018.herokuapp.com/user/task_content/${this.props.id}`)
    .then((res)=> res.json())
    .then((data)=>{
            this.setState({
                name:data.topic,
            })
        });
    };

//print with line
printComplete(){
    return(<a href={`/TaskInfo/${this.props.id}/${this.props.email}`}><li><span className="TaskDone"> {this.state.name}</span></li></a>)
}

//print without line
printUnComplete(){
    return(<a href={`/TaskInfo/${this.props.id}/${this.props.email}`}><li><span>{this.state.name}</span></li></a>)
}


    //if status is completed print Task name with line, else without
    render(){
    return(
        this.props.status==="Completed"?this.printComplete():this.printUnComplete()
    )
    }
}

export default Task