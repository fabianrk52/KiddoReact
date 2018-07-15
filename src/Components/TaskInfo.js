import React, { Component } from 'react';
import './PersonalInfo.css';
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
        <Helper key={'sub'+i} urlTo={"UpdateGrade"} index={i} email={sub.email} id_task={this.props.match.params.id_task} pic={sub.picture} />
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
    fetch(`https://kiddo2018.herokuapp.com/user/users_complete/${this.props.match.params.id_task}`)
    .then((res)=> res.json())
    .then((data)=>{
        data.map((data)=>this.add(data));
        console.log(data);
    })
}


    render(){
    return(
        <div>
        <div id="wrapper">
        <Header email={this.props.match.params.email} />
        <TaskContent fetchFrom={this.props.match.params.email} />
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