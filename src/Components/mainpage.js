import React, { Component } from 'react';
import '../index.css';
import Header from "./header";
import Nav from "./nav"
import Tasklist from "./Tasklist"
import Footer from "./footer"
import Connected from "./connected"
import Task from './task';


class Main extends Component{
      constructor(props){
          super(props)
      this.state={
        data:[],
      }
      this.add=this.add.bind(this);
      this.eachTask=this.eachTask.bind(this);  
}

    add(item) {
      this.setState(prevState => ({
        data: [
        ...prevState.data,
        {
            name: item.topic,
            id:item._id
        }]
      }));
      console.log(item);
    }
  

componentWillMount(){
      fetch(`https://kiddo2018.herokuapp.com/user/get_user_by_email/${this.props.match.params.email}`)
    .then((res)=> res.json())
    .then((data)=>{
        this.setState({
            name:data.name,
            pic:data.picture,
            email:data.email
    })
    });
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

eachTask(task,i){
  return (    
  <Task Show={this.showContent} key={task+i} index={i}>
      <a href={`/TaskInfo/${task.id}/${this.state.email}`}><li><span>{task.name}</span></li></a>
  </Task>
    );
}


  render(){
      return(
      <div id="wrapper">
      <div className="UserName">
              <a href={`/PersonalInfo/${this.state.email}`}>Hey {this.state.name}</a>
              <img src={this.state.pic} className="userPic"></img>
      </div>
      <div className="nav">
          <a href="#" className="navboxselected"><div className="datebox">Jan 12</div><div className="daybox">Today</div></a>
          <a href="#" className="navbox"><div className="datebox">Jan 12</div><div className="daybox">Tommorow</div></a>
          <a href="#" className="navbox"><div className="datebox">Jan 12</div><div className="daybox">Friday</div></a>
      </div>
      <div className="subjects">
          <div className="subjectbox">
              <ul>
              {this.state.data.map(this.eachTask)}
              </ul>
          </div>
      </div>
      <Connected>
        </Connected>
      <Footer>
        </Footer>
      </div>
      )
  }
}

export default Main