import React, { Component } from 'react';
import './header.css';


class Header extends Component{
    constructor(props){
        super(props)
    this.state={
        name:[
        ]
    }

    }

    componentWillUnmount(){
        fetch("https://kiddo2018.herokuapp.com/user/get_user_by_email/user1@gmail.com")
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            this.setState({name:data.name})
        });
    }

    render(){
    return(
          <div className="UserName">
              <p>Hey {this.state.name}</p>
          </div>
    )
    }
}

export default Header