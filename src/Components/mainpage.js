import React, { Component } from 'react';
import Header from "./header";
import Nav from "./nav"
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

//Add to state
    add(item) {
      this.setState(prevState => ({
        data: [
        ...prevState.data,
        {
            name: item.topic,
            id:item._id_task, 
            status:item.status,
            
        }]
      }));
    }
  
//get data from user
componentWillMount(){  
  fetch(`https://kiddo2018.herokuapp.com/user/get_user_by_email/${this.props.match.params.email}`)
    .then((res)=> res.json())
    .then((data)=>{
      this.setState({
        name:data.name,
        pic:data.picture,
        email:data.email,
        rank:data.rank,
});
        data.taskList.map((item) =>{
            this.add(item);
            console.log(item);
           }
    );
});
}

//craete Component TaskList 
eachTask(task,i){
  return (    
  <Task id={task.id} status={task.status} email={this.props.match.params.email} key={task+i} index={i} />
    );
}


  render(){
      return(
      <div id="wrapper">
       <Header email={this.props.match.params.email} />
      <Nav />
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