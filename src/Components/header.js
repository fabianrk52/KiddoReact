import React, { Component } from 'react';
import './header.css';


class Header extends Component{
    constructor(props){
        super(props)
    this.state={
        data:[]

    }

    }

    componentWillMount(){
          fetch("https://kiddo2018.herokuapp.com/user/get_user_by_email/user1@gmail.com")
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
                name:data.name,
                pic:data.picture,
                email:data.email
        })
        });
    }

    render(){
    return(
          <div className="UserName">
              <a href={`/PersonalInfo/${this.state.email}`}>Hey {this.state.name}</a>
              <img src={this.state.pic} className="userPic"></img>
          </div>
    )
    }
}

export default Header