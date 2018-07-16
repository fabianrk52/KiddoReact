import React, { Component } from 'react';


class TaskContent extends Component{
    constructor(props){
        super(props)
    this.state={
        data:[]

    }
    }
    componentWillMount(){
    fetch(`http://kiddo2018.herokuapp.com/user/task_content/${this.props.url}`)
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
                    topic:data.topic,
                    teacher:data.teacher,
                    content:data.content,
                    submission:data.submission,
            });
        });
    }

    render(){
    return(
        <div className="contentInfo">
            <p>Topic:{this.state.topic}</p>
            <p>Teacher: {this.state.teacher}</p>
            <p>Content: {this.state.content}</p>
            <p>Submission: {this.state.submission}</p>
        </div>
    )
}
}
export default TaskContent;