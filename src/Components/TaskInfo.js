import React, { Component } from 'react';
import './PersonalInfo.css';


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
    <a key={sub+i} index={i} href={`/UpdateGrade/${this.props.match.params.email}/${this.props.match.params.id_task}`}><img className="picConnected" src={sub.picture}></img></a>
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
    fetch(`https://kiddo2018.herokuapp.com/user/get_user_by_email/${this.props.match.params.email}`)
  .then((res)=> res.json())
  .then((data)=>{
      this.setState({
          name:data.name,
          pic:data.picture,
          department:data.department,
          phone:data.phone,
          rank:data.rank,
  })
  });
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
         <div className="UserName">
         <a href={`/PersonalInfo/${this.props.match.params.email}`}>Hey {this.state.name}</a>
         <span className="rankHeader">Rank: {this.state.rank}</span>
        </div>
        <div className="contentInfo">
            <p>Name:{this.state.name}</p>
            <p>Department: {this.state.department}</p>
            <p>Phone: {this.state.phone}</p>
            <p>Rank: {this.state.rank}</p>
            <p>Status: {this.state.status}</p> 
        </div>
            <div className="connected">
                  <ul>
                <p>Who finished?</p>
                  {this.state.data.map(this.eachHelper)}
                  </ul>
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