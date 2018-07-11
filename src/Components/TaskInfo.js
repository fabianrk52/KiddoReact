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
    <a key={sub+i} index={i} href="#"><img className="picConnected" src={sub.picture}></img></a>
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
    console.log(item);
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
    fetch(`https://kiddo2018.herokuapp.com/user/users_complete/${this.props.match.params.id_task}`)
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data);
        this.add(data);
    })
}


    render(){
    return(
        <div>
        <div id="wrapper">
         <div className="UserName">
         <a href={`/PersonalInfo/${this.props.match.params.email}`}>Hey {this.state.name}</a>
              <img src={this.state.pic} className="userPic"></img>
        </div>
        <div className="contentInfo">
            <p>Name:{this.state.name}</p>
            <p>Department: {this.state.department}</p>
            <p>Phone: {this.state.phone}</p>
            <p>Rank: {this.state.rank}</p>
        <div>
                  <ul>
                  {this.state.data.map(this.eachHelper)}
                  </ul>
        </div>
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