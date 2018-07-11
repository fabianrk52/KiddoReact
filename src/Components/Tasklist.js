import React, { Component } from 'react';
import './TaskList.css';
import Task from "./task";


class Subject extends Component{
    constructor(props){
        super(props);
    this.state={
        task:[]
    };
    this.eachTask   = this.eachTask.bind(this);
    this.add        = this.add.bind(this);
    this.showContent=this.showContent.bind(this);
}

add(item) {
    this.setState(prevState => ({
      task: [
      ...prevState.task,
      {
          name: item.topic,
          _id:item._id_task
      }]
    }));
  }

    componentWillMount(){
        fetch(`https://kiddo2018.herokuapp.com/user/get_user_taskList/${this.props.match.params.email}`)
        
      .then((res)=> res.json())
      .then((data)=>{
          var self = this;
          console.log(data[0].tasks);
          data[0].tasks.map((item) =>{
              self.add(item);
            }
      );
  });
}

showContent(){
    console.log("clicked");
}

eachTask(task,i){
    return (    
    <Task Show={this.showContent} key={task+i} index={i}>
        <a href={`/TaskInfo/${this.state._id}/${this.props.match.params.email}`}><li><span>{task.name}</span></li></a>
    </Task>
      );
  }

    render(){
    return(
        <div className="subjects">
          <div className="subjectbox">
              <ul>
              {this.state.task.map(this.eachTask)}
              </ul>
          </div>
      </div>
    )
    }
}

export default Subject