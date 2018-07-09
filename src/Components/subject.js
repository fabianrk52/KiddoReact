import React, { Component } from 'react';
import './subject.css';


class Subject extends Component{
    constructor(props){
        super(props);
    this.state={
        sub:[]
    };
    this.eachIdea   = this.eachIdea.bind(this);
    this.add        = this.add.bind(this);
}

add(item) {
    this.setState(prevState => ({
      sub: [
      ...prevState.sub,
      {
          name: item.topic,
      }]
    }));
  }

    componentWillMount(){
        fetch("https://kiddo2018.herokuapp.com/user/get_user_taskList/user1@gmail.com")
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

eachIdea(sub,i){
    return (    
    <a key={sub+i} index={i} href="#"><li><span>{sub.name}</span></li></a>
      );
  }

    render(){
    return(
        <div className="subjects">
          <div className="subjectbox">
              <ul>
              {this.state.sub.map(this.eachIdea)}
              </ul>
          </div>
      </div>
    )
    }
}

export default Subject