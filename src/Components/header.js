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
          fetch("https://kiddo2018.herokuapp.com/user/get_user_by_email/"+this.props.email)
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
                name:data.name,
                pic:data.picture,
                email:data.email,
                rank:data.rank
        })
        });
    }

    render(){
    return(
          <div className="UserName">
              <a href={`/PersonalInfo/${this.state.email}`}>Hey {this.state.name}</a>
              <span className="rankHeader"> Rank: {this.state.rank} </span>
          </div>
    )
    }
}

export default Header