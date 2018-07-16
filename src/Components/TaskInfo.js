import React, { Component } from 'react';
import Header from "./header"
import Footer from "./footer"
import TaskContent from "./TaskContent"
import Helper from "./Helper"

class InfoTask extends Component{
    constructor(props){
        super(props);
    this.state={
        data:[]
    };
    this.eachHelper   = this.eachHelper.bind(this);
    this.add=this.add.bind(this);
}




eachHelper(sub,i){
    return (    
        <Helper key={'sub'+i} urlTo={"UpdateGrade"} index={i} email={this.props.match.params.email}  id_task={this.props.match.params.id_task} pic={sub.picture} />
      );
  }

add(item) {
    this.setState(prevState => ({
      data: [
      ...prevState.data,
      {
          name: item.name,
          picture:item.picture,
          email:item.email
      }]
    }));
  }

componentWillMount(){
    fetch(`https://kiddo2018.herokuapp.com/user/user_task_complete/${this.props.match.params.id_task}`)
    .then((res)=> res.json())
    .then((data)=>{
        var self=this;
        console.log(data);
        data.map((data) => {
          self.add(data);
        });
    })
}


    render(){
    return(
        <div>
        <div id="wrapper">
        <Header email={this.props.match.params.email} />
        <TaskContent url={this.props.match.params.id_task} />
        <div className="connected">
            <ul>
                <p>Who finished?</p>
                    {this.state.data.map(this.eachHelper)}
                </ul>
            </div>
        <Footer/>
        </div>
        </div>

    )
    }
}

export default InfoTask