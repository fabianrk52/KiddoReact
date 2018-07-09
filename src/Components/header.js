import React, { Component } from 'react';
import './header.css';


class Header extends Component{
    constructor(props){
        super(props)
    this.state={
        name:[],
        pic:[]
    }

    }

    componentWillMount(){
          fetch("https://kiddo2018.herokuapp.com/user/get_user_by_email/user1@gmail.com")
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
                name:data.name,
                pic:data.picture
        })
        });
    }

    render(){
    return(
          <div className="UserName">
              <p>Hey {this.state.name}</p>
              <img src='{this.state.pic}' className="userPic"></img>
          </div>
    )
    }
}

export default Header