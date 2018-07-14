import React, { Component } from 'react';
import './PersonalInfo.css';


class InfoTask extends Component{
    constructor(props){
        super(props);
    this.state={
        data:[]
    };
    this.eachIdea   = this.eachIdea.bind(this);
}

eachIdea(sub,i){
    return (    
    <a key={sub+i} index={i} href="#"><img className="picConnected" src={sub.picture}></img></a>
      );
  }

componentWillMount(){
    fetch(`https://kiddo2018.herokuapp.com/user/get_user_by_email/${this.props.match.params.email}`)
  .then((res)=> res.json())
  .then((data)=>{
      console.log(data);
      this.setState({
          name:data.name,
          pic:data.picture,
          department:data.department,
          phone:data.phone,
          rank:data.rank,
  })
  });
}


    render(){
    return(
        <div>
        <div id="wrapper">
         <div className="UserName">
         <a href={`/PersonalInfo/${this.props.match.params.email}`}>Hey {this.state.name}</a>
              <span className="rankHeader">Rank: {this.state.rank}</span>
        </div>
        <div className="contentInfo">
            <p>Name:{this.state.name}</p>
            <p>Department: {this.state.department}</p>
            <p>Phone: {this.state.phone}</p>
            <p>Rank: {this.state.rank}</p>
            <img className="userPic" src={this.state.pic}></img>
        </div>
        <div className="connected">
            </div>
        <div className="footer">
          <p>Nodody's Helping U? Start Teacher Chat</p>
      </div>
        </div>
        </div>

    )
    }
}

export default InfoTask